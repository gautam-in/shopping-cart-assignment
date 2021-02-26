import 'regenerator-runtime/runtime';
import {
    getCartCount, setCartCount, renderCartQuantity, setCartItems,
    addItemCartSession, openCart, closeCart
} from './cart';
import { SessionStorageService } from '../helpers/webStorage';
import { EcommService } from '../helpers/ecommService';

let productsData = [];
const categoryState = {};

function getCategories() {
    let data = sessionStorageService.getItem('categories');
    if (!data) {
        ecommService.getCategories().then(
            data => {
                data.sort((a, b) => a.order - b.order);
                sessionStorageService.setItem('categories', data, true);
                renderCategories(data);
            }
        ).catch(err => console.log(err));
    }
    else {
        data = JSON.parse(data);
        renderCategories(data);
    }
}

function renderCategories(data) {
    const categoriesPane = document.querySelector('.categories-row');
    for (let element of data) {
        if (element.enabled) {
            const divElement = document.createElement('div');
            divElement.classList.add('col-12');
            divElement.classList.add('p-3');
            divElement.classList.add('individual-category');

            const anchorElement = document.createElement('a');
            anchorElement.textContent = element.name;
            anchorElement.href = '#';
            anchorElement.classList.add('category-link');
            anchorElement.id = element.id;

            divElement.appendChild(anchorElement);
            categoriesPane.appendChild(divElement);

            categoryState[element.id] = -1;
        }
    }
}

function getProducts() {
    ecommService.getProducts().then(
        data => {
            productsData = data;
            const categorySelected = sessionStorageService.getItem('categorySelected');
            if (categorySelected) {
                filterProducts(categorySelected);
            }
            else {
                renderProducts(productsData);
            }
        }
    ).catch(err => console.log(err));
}

function renderProducts(data) {
    const productsRow = document.querySelector('.products-row');
    productsRow.innerHTML = '';
    data.forEach(element => {
        const divElement = document.createElement('div');
        divElement.classList.add('col-lg-3');
        divElement.classList.add('col-md-6');
        divElement.classList.add('col-sm-12');
        divElement.classList.add('my-3');
        divElement.classList.add('text-center');
        divElement.classList.add('product-box');

        const h4 = document.createElement('h4');
        h4.textContent = element.name;

        const image = document.createElement('img');
        image.src = element.imageURL;
        image.height = '150';
        image.alt = element.name;

        const prodDescription = document.createElement('p');
        prodDescription.classList.add('product-description')
        prodDescription.classList.add('text-left');
        prodDescription.classList.add('mt-2');
        prodDescription.classList.add('px-2');
        prodDescription.textContent = element.description;

        const priceBuyDiv = document.createElement('div');
        priceBuyDiv.classList.add('flexbox-space-between');

        const priceDiv = document.createElement('div');
        priceDiv.classList.add('mt-1');
        priceDiv.textContent = `MRP Rs. ${element.price}`;

        const button = document.createElement('button');
        button.classList.add('btn')
        button.classList.add('btn-danger')
        button.classList.add('btn-sm')
        button.classList.add('buy-now');
        button.type = 'button';
        button.id = element.id;
        button.textContent = `Buy Now`;

        priceBuyDiv.appendChild(priceDiv);
        priceBuyDiv.appendChild(button);

        divElement.appendChild(h4);
        divElement.appendChild(image);
        divElement.appendChild(prodDescription);
        divElement.appendChild(priceBuyDiv);

        productsRow.appendChild(divElement);
    });
}

function filterProducts(id) {
    const category = document.getElementById(id);
    if (categoryState[id] === -1) {
        let filteredData = productsData.filter(x => x.category === id);
        category.focus();
        renderProducts(filteredData);
    }
    else {
        category.blur();
        renderProducts(productsData);
    }
    categoryState[id] *= -1;
}

window.onbeforeunload = () => sessionStorageService.removeItem('categorySelected');

const sessionStorageService = new SessionStorageService();
const ecommService = new EcommService();

document.addEventListener("DOMContentLoaded", (event) => {

    getCategories();
    getProducts();
    renderCartQuantity();

    const cartButton = document.querySelector('.cart-button');
    cartButton.addEventListener('click', openCart);

    const cartClose = document.querySelector('.close-cart');
    cartClose.addEventListener('click', closeCart);

    const shoppingButton = document.querySelector('.shopping-button');
    shoppingButton.addEventListener('click', closeCart);

    //Event delegation
    const categoryRow = document.querySelector('.categories-row');
    categoryRow.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.classList.contains('category-link')) {
            const link = e.target;
            filterProducts(link.id);
        }
    });

    //Event delegation
    const productsRow = document.querySelector('.products-row');
    productsRow.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.classList.contains('buy-now')) {
            const button = e.target;
            ecommService.addToCart(button.id)
                .then(data => {
                    if (data.response === 'Success') {
                        // alert(data.responseMessage);
                        setCartCount(1);
                        setCartItems(button.id, productsData)
                        renderCartQuantity();
                    }
                }).catch(err => console.log(err));
        }
    });
});
