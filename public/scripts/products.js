const listGourp = document.querySelector(".category-side-nav");
let previousListItem = null;

async function loadData() {
    try {
        await loadCategories();
        await loadProducts();
    }catch(error) {
        console.log('error',error);
    }
    
}


 async function loadCategories() {
    const response  = await fetch(API_PATH.categoriesUrl);
    categories = await response.json();
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
    
    
}

async function loadProducts() {
    let localProducts;
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


function addtoCart(eventData) {
    let target = eventData.target;
    let productId =  target.getAttribute('data-id');
    let productChecked = cart.find(item => item.id === productId);
    if(productChecked) {
        let productAlert = document.querySelector('#product-alert');
        productAlert.classList.add('show');
        setTimeout(()=> {
            productAlert.classList.remove('show');      
        },3000);
        return;
    }
    let product = products.find(product =>  product.id === productId);
    addProductToCart({id:product.id,quantity:1});
}



function productCardItem(product) {
    let productItem = document.createElement('div');
    productItem.setAttribute('class','col-md-3 col-sm-6');

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
    productImg.setAttribute('class','card-img-top product-img');
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
     buyNowButton.setAttribute('data-id', product.id);
     buyNowButton.innerHTML = 'Buy Now';
     productAction.append(buyNowButton);
     
     productCardBody.append(productAction);

     productCard.append(productCardBody);
     productItem.append(productCard);
     document.querySelector('.product-container').appendChild(productItem);
     buyNowButton.addEventListener("click", addtoCart);
}


document.addEventListener('DOMContentLoaded',loadData);