import {getBanners, getCategories} from './home.js';
import {getCategoryList, getProducts, productsLoad, showCart  } from './products/products.js';

window.onload = (event) => {
    getBanners();
   getCategories();
    let cart = document.querySelector('#cartAmount .counter');
    cart.textContent = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).length : 0;
}

let cartButton = document.getElementsByClassName('cart');
cartButton[0].addEventListener('click', () => {
    showCart();
});
