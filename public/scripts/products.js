import { API_PATH } from './constants.js';


const listGourp = document.querySelector(".category-side-nav");
let products = [];
let previousListItem = null;

async function loadData() {
    try {
        await loadCategories();
        await loadProducts();
    }catch(error) {
        console.log('error',error);
    }
    
}

//function to load categories
async function loadCategories() {
    try {
        const response  = await fetch(API_PATH.categoriesUrl);
        let categories = await response.json();
        categories.filter(category => category.enabled)
          .forEach(category => {
               let button = document.createElement('button');
                button.setAttribute('type','button');
                button.setAttribute('data-id',category.id);
                button.className = 'list-group-item list-group-item-action';
                button.innerText=category.name
               listGourp.appendChild(button);
          });
    
          listGourp.addEventListener('click',filterProducts);
    } catch(error){
        console.log("error",error);
    }    

}

//function to load products initially
async function loadProducts() {
    let localProducts;
    try {
        const response = await fetch(API_PATH.productsUrl); 
        products = await response.json();
        
        const categoryId = sessionStorage.getItem('categoryId');
        
        if(categoryId) {
        localProducts =  products.filter(product => product.category === categoryId);

        //setting active category whenver we select category from home page 
        let listGroupItem = document.querySelector(`.list-group-item[data-id='${categoryId}']`);
        listGroupItem.classList.add('active');
        previousListItem = listGroupItem;
        
        } else {
            localProducts = [...products];
        }
        for(let product of localProducts) {
            productCardItem(product);
        }
    }catch(error) {
        console.log("error", error);
    }
    
}


function filterProducts(eventData) {
    let productList = [];
    let target = eventData.target;
    eventData.srcElement.classList.add('active');
    if(target.tagName === 'BUTTON'){
        let categoryId =  target.getAttribute('data-id');
        productList = products.filter(product =>  product.category === categoryId)
    }

    document.querySelector('.product-container').innerHTML = '';
    
    for(let product of productList) {
        productCardItem(product);
    }
    if(previousListItem) {
        previousListItem.classList.remove('active');
    }
    previousListItem = eventData.srcElement;
}



function productCardItem(product) {
    let productItem = document.createElement('div');
    productItem.setAttribute('class','col-md-3');

    let productCard = document.createElement('div');
    productCard.setAttribute('class','card m-1 p-2');
    
    let productTitle = document.createElement('h5');
    productTitle.setAttribute('class','card-title product-name');
    productTitle.innerHTML = product.name;
    productCard.append(productTitle);


    let productImg = document.createElement('img');
    productImg.setAttribute('src', product.imageURL);
    productImg.setAttribute('alt', product.description);
    productImg.setAttribute('height', '150px');
    productImg.setAttribute('class','card-img-top');
    productCard.append(productImg);

    let productCardBody = document.createElement('div');
    productCardBody.setAttribute('class', 'card-body');

    let productDesc = document.createElement('p');
     productDesc.setAttribute('class', 'card-text product-desc ');
     productDesc.textContent = product.description;
     productCardBody.append(productDesc);
   
     let productAction = document.createElement('div');
     productAction.setAttribute('class', 'product-actions');

     let productPrice = document.createElement("h5");
     productPrice.setAttribute("class", "card-text");
     productPrice.innerHTML = "MRP ₹." + product.price;
     productAction.append(productPrice);
    

     let buyNowButton = document.createElement("button");
     buyNowButton.setAttribute("class", "btn btnCrimsonPink");
     buyNowButton.innerHTML = 'Buy Now';
     productAction.append(buyNowButton);
     
     productCardBody.append(productAction);

     productCard.append(productCardBody);
     productItem.append(productCard);
     document.querySelector('.product-container').appendChild(productItem);
}


document.addEventListener('DOMContentLoaded',loadData)