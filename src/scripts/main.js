import 'regenerator-runtime/runtime';
import {
    getCartCount, setCartCount, renderCartQuantity, setCartItems,
    addItemCartSession, openCart, closeCart
} from './cart';
import { SessionStorageService } from '../helpers/webStorage';
import { EcommService } from '../helpers/ecommService';

function getCategories() {
    let data = sessionStorageService.getItem('categories');
    if (!data) {
        ecommService.getCategories().then(
            data => {
                data.sort((a, b) => a.order - b.order);
                sessionStorageService.setItem('categories', data, true);
                renderCategories(data);
            }
        );
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
            divElement.classList.add('col-12');
            divElement.classList.add('category-item');

            const imgDiv = document.createElement('div');
            const image = document.createElement('img');
            image.src = element.imageUrl;
            image.height = '200';
            image.alt = element.key;
            imgDiv.appendChild(image);

            const textDiv = document.createElement('div');
            textDiv.classList.add('flexbox-vertical-horizontal-center');
            textDiv.classList.add('px-3');

            const h3 = document.createElement('h3');
            h3.textContent = element.name;
            
            const p = document.createElement('p');
            p.textContent = element.description;

            const button = document.createElement('button');
            button.classList.add('btn');  //IE doesn't support multiple arguments
            button.classList.add('btn-danger');
            button.classList.add('explore-button');
            button.type = 'button';
            button.id = element.id;
            button.textContent = `Explore ${element.key}`;

            textDiv.appendChild(h3); //append changed to appendChild for IE support
            textDiv.appendChild(p);
            textDiv.appendChild(button);
            if (odd) {
                divElement.appendChild(imgDiv), 
                divElement.appendChild(textDiv);
            }
            else {
                divElement.appendChild(textDiv);
                divElement.appendChild(imgDiv);
            }
            mainDiv.appendChild(divElement);
            odd = !odd;
        }
    }
}

function getCarouselItems() {
    ecommService.getBanners().then(
        data => renderCarousel(data)
    ).catch(err => console.log(err));
}

function renderCarousel(data) {
    const carousel = document.querySelector('.carousel');
    data.forEach(element => {
        if (element.isActive) {
            const div = document.createElement('div');
            div.classList.add('carousel-cell');

            const img = document.createElement('img');
            img.src = element.bannerImageUrl;
            img.id = element.id;
            img.alt = element.bannerImageAlt;

            div.appendChild(img);
            carousel.appendChild(div);
        }
    })
}

const sessionStorageService = new SessionStorageService();
const ecommService = new EcommService();

// window.onload = () => getCarouselItems();
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
            sessionStorageService.setItem('categorySelected', button.id);
            window.location = 'products.html';
        }
    });
});
