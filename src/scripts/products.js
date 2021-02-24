import 'regenerator-runtime/runtime';
import {
    getCartCount, setCartCount, renderCartQuantity, setCartItems,
    addItemCartSession, openCart, closeCart
} from './cart';
import { WebStorage } from '../helpers/webStorage';
import { ApiInteraction } from '../helpers/apiInteraction';

let productsData = [];
// let categoryLinks = null;
// let buyNowButtons = null;
const categoryState = {};

function getCategories() {
    let data = webStorage.getItemSessionStore('categories');
    if (!data) {
        apiInteraction.getCategories().then(
            data => {
                data.sort((a, b) => a.order - b.order);
                webStorage.setItemSessionStore('categories', data, true);
                renderCategories(data);
            }
        ).catch(err => console.log(err));
        // data = await fetch('http://localhost:5000/categories');
        // data = await data.json();
        // data.sort((a, b) => a.order - b.order);
        // webStorage.setItemSessionStore('categories', data, true);
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
            divElement.classList.add('col-12', 'p-3', 'individual-category');
            const anchorElement = document.createElement('a');
            anchorElement.textContent = element.name;
            anchorElement.href = '#';
            anchorElement.classList.add('category-link');
            anchorElement.id = element.id;
            divElement.append(anchorElement);
            categoriesPane.append(divElement);
            categoryState[element.id] = -1;
        }
    }
    // categoryLinksClickInit();
}

function getProducts() {
    // let data = await fetch('http://localhost:5000/products');
    // productsData = await data.json();
    // const categorySelected = webStorage.getItemSessionStore('categorySelected');
    // if (categorySelected) {
    //     filterProducts(categorySelected);
    // }
    // else {
    //     renderProducts(productsData);
    // }

    apiInteraction.getProducts().then(
        data => {
            productsData = data;
            const categorySelected = webStorage.getItemSessionStore('categorySelected');
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
        divElement.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'my-3', 'text-center', 'product-box');
        const h4 = document.createElement('h4');
        h4.textContent = element.name;
        const image = document.createElement('img');
        image.src = element.imageURL;
        image.height = '150';
        image.alt = element.name;
        const prodDescription = document.createElement('p');
        prodDescription.classList.add('product-description', 'text-left', 'mt-2', 'px-2');
        prodDescription.textContent = element.description;
        const priceBuyDiv = document.createElement('div');
        priceBuyDiv.classList.add('flexbox-space-between');
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('mt-1');
        priceDiv.textContent = `MRP Rs. ${element.price}`;
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'btn-sm', 'buy-now');
        button.type = 'button';
        button.id = element.id;
        button.textContent = `Buy Now`;
        priceBuyDiv.append(priceDiv, button);
        divElement.append(h4, image, prodDescription, priceBuyDiv);
        productsRow.append(divElement);
    });
    // buyNowClickInit();
}

/*
function categoryLinksClickInit() {
    categoryLinks = document.querySelectorAll('.category-link');

    categoryLinks.forEach(link => {
        link.addEventListener('click', () => { filterProducts(link.id) });
    });
}
*/

function filterProducts(id) {
    const category = document.getElementById(id);
    if (categoryState[id] === -1) {
        let filteredData = productsData.filter(x => x.category === id);
        // category.style.color = '#000';
        renderProducts(filteredData);
    }
    else {
        // category.style.color = 'rgba(0,0,0,0.5)';
        renderProducts(productsData);
    }
    categoryState[id] *= -1;
}

/*
function buyNowClickInit() {
    buyNowButtons = document.querySelectorAll('.buy-now');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            // let data = await fetch('http://localhost:5000/addToCart/', {
            //     method: "POST",
            //     body: JSON.stringify({ productId: button.id })
            // });
            // data = await data.json();
            apiInteraction.addToCart(button.id)
                .then(data => {
                    if (data.response === 'Success') {
                        alert(data.responseMessage);
                        setCartCount(1);
                        setCartItems(button.id, productsData)
                        renderCartQuantity();
                    }
                }).catch(err => console.log(err));
        });
    });
}
*/

window.onbeforeunload = () => webStorage.removeItemSessionStore('categorySelected');

const webStorage = new WebStorage();
const apiInteraction = new ApiInteraction();

document.addEventListener("DOMContentLoaded", (event) => {
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
            apiInteraction.addToCart(button.id)
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



getCategories();
getProducts();
renderCartQuantity();