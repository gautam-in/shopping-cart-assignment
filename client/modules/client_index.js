import {getBanners, getCategories} from './home.js';
import {getCategoryList } from './products/products.js';

window.onload = (event) => {
    getBanners();
   getCategories();
}

/* const products = document.getElementById('products');
products.onclick = () => {
    getCategoryList();
} */
