import {getCategoryList, getProducts, productsLoad, showCart } from './products/products.js';

console.log('sdfsdfsfsf', products);
window.onload = (event) => {
    productsLoad();
    getCategoryList();
    getProducts();
    let cart = document.querySelector('#cartAmount .counter');
    cart.textContent = JSON.parse(localStorage.getItem("cart")).length || 0;
}

let cartButton = document.getElementsByClassName('cart');
console.log(cartButton);
cartButton[0].addEventListener('click', () => {
    showCart();
});

