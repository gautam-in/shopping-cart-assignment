import 'regenerator-runtime/runtime';
import {
    getCartCount, setCartCount, renderCartQuantity, setCartItems,
    addItemCartSession, openCart, closeCart
} from './cart';
import { WebStorage } from '../helpers/webStorage';
import { ApiInteraction } from '../helpers/apiInteraction';

function getCategories() {
    let data = webStorage.getItemSessionStore('categories');
    if (!data) {
        apiInteraction.getCategories().then(
            data => {
                data.sort((a, b) => a.order - b.order);
                webStorage.setItemSessionStore('categories', data, true);
                renderCategories(data);
            }
        );
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
    const mainDiv = document.querySelector('.categories-row');
    let odd = true;
    for (let element of data) {
        if (element.enabled) {
            const divElement = document.createElement('div');
            divElement.classList.add('col-12', 'category-item');
            const imgDiv = document.createElement('div');
            const image = document.createElement('img');
            image.src = element.imageUrl;
            image.height = '200';
            image.alt = element.key;
            imgDiv.append(image);
            const textDiv = document.createElement('div');
            textDiv.classList.add('flexbox-vertical-horizontal-center', 'px-3');
            const h3 = document.createElement('h3');
            h3.textContent = element.name;
            const p = document.createElement('p');
            p.textContent = element.description;
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-danger', 'explore-button');
            button.type = 'button';
            button.id = element.id;
            button.textContent = `Explore ${element.key}`;
            textDiv.append(h3, p, button);
            if (odd) {
                divElement.append(imgDiv, textDiv);
            }
            else {
                divElement.append(textDiv, imgDiv);
            }
            mainDiv.append(divElement);
            odd = !odd;
        }
    }
    // buttonClickInit();
}

/*
function buttonClickInit() {
    const exploreButtons = document.querySelectorAll('.explore-button');

    exploreButtons.forEach(button => {
        button.addEventListener('click', () => {
            webStorage.setItemSessionStore('categorySelected', button.id);
            window.location = 'products.html';
        });
    });
}
*/

function getCarouselItems() {
    apiInteraction.getBanners().then(
        data => renderCarousel(data)
    ).catch(err => console.log(err));
}

function renderCarousel(data) {
    // let data = await fetch('http://localhost:5000/banners');
    // data = await data.json();
    const carousel = document.querySelector('.carousel');
    // carousel.innerHTML = '';
    data.forEach(element => {
        if (element.isActive) {
            const div = document.createElement('div');
            div.classList.add('carousel-cell');
            const img = document.createElement('img');
            img.src = element.bannerImageUrl;
            img.id = element.id;
            img.alt = element.bannerImageAlt;
            div.append(img);
            carousel.append(div);
        }
    })
}

const webStorage = new WebStorage();
const apiInteraction = new ApiInteraction();
getCarouselItems();

document.addEventListener("DOMContentLoaded", (event) => {
    getCategories();
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
        if (e.target.tagName === 'BUTTON' && e.target.classList.contains('explore-button')) {
            const button = e.target;
            webStorage.setItemSessionStore('categorySelected', button.id);
            window.location = 'products.html';
        }
    });
});

// getCarouselItems();


