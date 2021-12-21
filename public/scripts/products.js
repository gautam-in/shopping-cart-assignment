import { API_PATH } from './constants.js';
let categories = [];
let products = [];

const listGourp = document.querySelector(".category-side-nav");
 console.log(listGourp);
function loadData() {
    loadCategories();
    loadProducts();
}


async function loadCategories() {
    const response  = await fetch(API_PATH.categoriesUrl);
    categories = await response.json();
    console.log(categories);
     categories.filter(category => category.enabled)
      .forEach(category => {
           let button = document.createElement('button');
            button.setAttribute('type','button');
            button.setAttribute('data-id',category.id);
            button.className = 'list-group-item list-group-item-action';
            button.innerText=category.name
           listGourp.appendChild(button);
      });

}


async function loadProducts() {
    const response = await fetch(API_PATH.productsUrl); 
    products = await response.json();
    console.log(products);
}

document.addEventListener('DOMContentLoaded',loadData)