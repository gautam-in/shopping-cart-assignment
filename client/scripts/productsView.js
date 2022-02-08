import { fetchData } from './utils.js';

const categories = [    
{
  "name": "Beverages",
  "key": "beverages",
  "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
  "enabled": true,
  "order": 3,
  "imageUrl": "/static/images/category/beverages.png",
  "id": "5b675e5e5936635728f9fc30"
},
{
  "name": "Bakery Cakes and Dairy",
  "key": "bakery-cakes-dairy",
  "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
  "enabled": true,
  "order": 2,
  "imageUrl": "/static/images/category/bakery.png",
  "id": "5b6899123d1a866534f516de"
},
{
  "name": "Beauty and Hygiene",
  "key": "beauty-hygiene",
  "description": "Buy beauty and personal care products online in India at best prices.",
  "enabled": true,
  "order": 4,
  "imageUrl": "/static/images/category/beauty.png",
  "id": "5b68994e3d1a866534f516df"
},
{
  "name": "Baby Care",
  "key": "baby",
  "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
  "enabled": true,
  "order": 5,
  "imageUrl": "/static/images/category/baby.png",
  "id": "5b6899683d1a866534f516e0"
},
{
  "name": "Fruits & Vegetables",
  "key": "fruit-and-veg",
  "description": "A variety of fresh fruits and vegetables.",
  "enabled": true,
  "order": 1,
  "imageUrl": "/static/images/category/fruits.png",
  "id": "5b6899953d1a866534f516e2"
}
]

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
let productsContainer = document.querySelector('.products-container');
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
navList.addEventListener('click', event => filterProducts(event.target.id));


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