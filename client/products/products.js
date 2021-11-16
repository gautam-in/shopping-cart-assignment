window.addEventListener('DOMContentLoaded', fetchForFirstLoad);

async function fetchForFirstLoad(){
    let loadCategories = await fetchProductCategories();
    let categoriesJSON = await loadCategories.json();

    let categoryEl = document.querySelector('.product-categories');
    let categoryList = document.createElement('ul');
    categoryList.className = "category-list-style";

    let categoryDropdownEl = document.querySelector('.product-categories-dropdown');
    let categoryDropdown = document.createElement('select');
    categoryDropdown.className = "category-dropdown";

    cartBtnValueDisplay();

    for(let category of categoriesJSON){
        let categoryName = document.createElement('li');
        categoryName.className = "category-name";
        categoryName.textContent = category.name;
        categoryName.addEventListener('click', () => filterProducts(category.id))
        categoryList.appendChild(categoryName);

        let categoryNameDD = document.createElement('option');
        categoryNameDD.value = category.name;
        categoryNameDD.textContent = category.name;
        categoryDropdown.appendChild(categoryNameDD);
    }

    categoryDropdownEl.appendChild(categoryDropdown);
    categoryEl.appendChild(categoryList);

    let loadProducts = await fetchProducts();
    let productsJSON = await loadProducts.json();


    renderProducts(productsJSON);
}


function renderProducts(productsJSON){
    let productListEl = document.querySelector('.product-display');

    for(let product of productsJSON){
        let productCard = document.createElement('div');
        productCard.id = product.sku;
        productCard.classList.add('card', 'product-item-card');

        let productCardBody = document.createElement('div');
        productCardBody.classList.add('card-body', 'product-card');

        let productName = document.createElement('h5');
        productName.className = "product-name";
        productName.textContent = product.name;

        let productImg = document.createElement('img');
        productImg.classList.add('product-image');
        productImg.src = product.imageURL;
        productImg.alt = product.name;

        let productDescription = document.createElement('p');
        productDescription.className = "product-description";
        productDescription.textContent = product.description;

        let productPurchaseDiv = document.createElement('div');
        productPurchaseDiv.className = "product-purchase";
        let productPrice = document.createElement('p');
        productPrice.textContent = `MRP Rs.${product.price}`;
        let productBuyBtn = document.createElement('button');
        productBuyBtn.textContent = "Buy Now";
        productBuyBtn.classList.add('product-purchase-btn');
        productBuyBtn.addEventListener('click', () => addToCart(product.id, product));
        productPurchaseDiv.appendChild(productPrice);
        productPurchaseDiv.appendChild(productBuyBtn);

        productCardBody.appendChild(productName);
        productCardBody.appendChild(productImg);
        productCardBody.appendChild(productDescription);
        productCardBody.appendChild(productPurchaseDiv);
        productCard.appendChild(productCardBody);

        productListEl.appendChild(productCard);
    }

}

async function filterProducts(categoryId){
    let productListEl = document.querySelector('.product-display');

    productListEl.innerHTML = ``;

    let loadProducts = await fetchProducts();
    let allProducts = await loadProducts.json();
    let productsToBeDisplayed = allProducts.filter(product => {
        return product.category === categoryId;
    });


    renderProducts(productsToBeDisplayed);
}


function cartBtnValueDisplay(){
    let cartBtn = document.querySelector('.login-cart-btn');
    cartBtnValue = localStorage.length ===0 ? "0 item": localStorage.length +  " items";
    cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${cartBtnValue}`;
}


function fetchProductCategories(){
    return fetch('http://localhost:5000/categories');
}

function fetchProducts(){
    return fetch('http://localhost:5000/products');
}

function addToCart(productId, product){  
    let prodDetails;
    if(localStorage.getItem(productId) !== null){
        console.log("Here");
        let updateProduct =  JSON.parse(localStorage.getItem(productId));
        prodDetails = {
            ...updateProduct,
            quantity : updateProduct.quantity + 1,
            buyingPrice: (updateProduct.quantity + 1) * updateProduct.price
        }
    }
    else{
        prodDetails = {
            ...product,
            quantity : 1
        }
    }
    
    localStorage.setItem(productId, JSON.stringify(prodDetails));
    cartBtnValueDisplay();
    // return fetch('http://localhost:5000/addToCart',{
    //     method: 'POST',
    //     body: productId,
    //     headers: {
    //         'Content-Type' : 'application/json'
    //     }
    // })
}

function checkNumberOfItems(){
    return localStorage.length;
}
