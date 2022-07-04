import {getCategoryList, getProducts, productsLoad, showCart  } from './modules/products/products.js';

window.onload = (event) => {
    let cart = document.querySelector('#cartAmount .counter');
    cart.textContent = JSON.parse(localStorage.getItem("cart")).length || 0;
}

let cartButton = document.getElementsByClassName('cart');
cartButton[0].addEventListener('click', () => {
    showCart();
});