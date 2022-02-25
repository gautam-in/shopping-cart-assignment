import { fetchData } from './utils.js';

//IIFE to fetch categories and create navlist
(async() => {
    const categories = await fetchData('http://localhost:5000/categories');
    let categoriesSorted = categories.sort((a, b) => {
        if(a.order < b.order)
            return -1;
        else if(a.order > b.order)
            return 1;
        else
            return 0;
    })
    let navList = document.querySelector('.nav-list');
    categoriesSorted.forEach(category => {
    let listItem = document.createElement('li');
    listItem.classList.add('nav-link-item');
    listItem.setAttribute('role', 'button');
    listItem.setAttribute('tabindex', '0');
    listItem.setAttribute('id', category.id)
    listItem.innerText = category.name;
    navList.appendChild(listItem);
    })
    navList.addEventListener('click', event => filterProducts(event.target.id));
    if(window.localStorage.getItem('categoryId')){
        filterProducts(window.localStorage.getItem('categoryId'));
        document.getElementById(window.localStorage.getItem('categoryId')).focus();
        window.localStorage.clear();
    }
    else{
        const products = await fetchData('http://localhost:5000/products');
        products.forEach(product => {
            displayProduct(product);
        })
    }
})();

let productsContainer = document.querySelector('.products-container');


//function definitions
async function filterProducts(id){
    const products = await fetchData('http://localhost:5000/products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
    if(product.category === id){
    displayProduct(product);
    }
});
}
function displayProduct(product){
    let productCard = document.createElement('section');
    productCard.classList.add('product-card');
    let productImg = document.createElement('img');
    productImg.classList.add('product-img')
    productImg.setAttribute('src', '../..' + product.imageURL);
    productImg.setAttribute('alt', product.name);
    productCard.appendChild(productImg);
    let productDescription = document.createElement('section');
    productDescription.classList.add('product-desc');
    let productDescContent = document.createElement('p');
    productDescContent.innerText = product.description;
    productDescription.appendChild(productDescContent);
    productCard.appendChild(productDescription);
    let productFooter = document.createElement('section');
    productFooter.classList.add('product-footer');
    let productPrice = document.createElement('p');
    productPrice.innerText = `MRP Rs.` + product.price;
    productFooter.appendChild(productPrice);
    let buyButton = document.createElement('button');
    buyButton.setAttribute('id', product.id);
    buyButton.classList.add('add-btn');
    buyButton.innerText = `Add To Cart`;
    buyButton.onclick = addProductToCart;
    if(window.localStorage.getItem('cart')){
        JSON.parse(window.localStorage.getItem('cart')).forEach(cartItem => {
            if(product.id === cartItem.id){
                buyButton.setAttribute('disabled', true);
                buyButton.innerText = `Added To Cart`;
            }
        })
    }
    productFooter.appendChild(buyButton);
    productCard.appendChild(productFooter);
    productsContainer.appendChild(productCard);
}

async function addProductToCart(event){
    const products = await fetchData('http://localhost:5000/products');
    document.getElementById(event.target.id).setAttribute('disabled', true);
    document.getElementById(event.target.id).innerText = 'Added To Cart';
    let cartProduct = products.find(product => product.id === event.target.id);
    cartProduct.imageURL = '../../' + cartProduct.imageURL;
    let cart;
    if(window.localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    else
        cart = [];
    cart.push(cartProduct);
    window.localStorage.setItem('cart', JSON.stringify(cart));
    document.querySelector('#items-cart p').innerHTML = `${cart.length} Items`;
}