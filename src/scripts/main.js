import 'regenerator-runtime/runtime';
import {
    getCartCount, setCartCount, renderCartQuantity, setCartItems,
    addItemCartSession, openCart, closeCart
} from './cart';

async function getCategories() {
    let data = sessionStorage.getItem('categories');
    if (!data) {
        data = await fetch('http://localhost:5000/categories');
        data = await data.json();
        data.sort((a, b) => a.order - b.order);
        sessionStorage.setItem('categories', JSON.stringify(data));
    }
    else {
        data = JSON.parse(data);
    }
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
    buttonClickInit();
}

function buttonClickInit() {
    const exploreButtons = document.querySelectorAll('.explore-button');

    exploreButtons.forEach(button => {
        button.addEventListener('click', () => {
            sessionStorage.setItem('categorySelected', button.id);
            window.location = 'products.html';
        });
    });
}

getCategories();
renderCartQuantity();

const cartButton = document.querySelector('.cart-button');
cartButton.addEventListener('click', openCart);

const cartClose = document.querySelector('.close-cart');
cartClose.addEventListener('click', closeCart);

const shoppingButton = document.querySelector('.shopping-button');
shoppingButton.addEventListener('click', closeCart);