const fruits = '5b6899953d1a866534f516e2';
const bakeryCakesDairy = '5b6899123d1a866534f516de';
const beverages = '5b675e5e5936635728f9fc30';
const beautyHygiene = '5b68994e3d1a866534f516df';
const baby = '5b6899683d1a866534f516e0';

let productContainerEl = document.getElementById('product-container');
let products1;
let selectedCategoryProducts = [];


window.addEventListener('DOMContentLoaded', getProducts);
function getProducts() {
    fetch("./../../server/products/index.get.json")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Something went wrong !");
        })
        .then(function (products) {
            products1 = products;
            renderProducts(products);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function renderProducts(products) {
    productContainerEl.innerHTML = '';
    products.forEach(product => {
        let itemContainerDiv = document.createElement('div');
        itemContainerDiv.classList.add('product-item');
        //----------------------------------------
        let headingDiv = document.createElement('div');
        headingDiv.classList.add('product-item-heading');

        let headingEl = document.createElement('h3');
        headingEl.classList.add('heading-quarternary');
        headingEl.innerText = product.name.slice(0, 50);
        headingDiv.append(headingEl);
        itemContainerDiv.append(headingDiv);
        // ---------------------------------------
        // let mobileWrapperDiv = document.createElement('div');
        // mobileWrapperDiv.classList.add('product-item-mobile-view');
        // itemContainerDiv.append(mobileWrapperDiv);

        let imgDiv = document.createElement('div');
        imgDiv.classList.add('product-item-image');

        let imageEl = document.createElement('img');
        imageEl.src = `../..${product.imageURL}`;
        imgDiv.append(imageEl);
        itemContainerDiv.append(imgDiv);
        //------------------------------------------
        let productDescriptionDiv = document.createElement('div');
        productDescriptionDiv.classList.add('product-item-description');

        let descriptionP = document.createElement('p');
        descriptionP.innerText = product.description;
        productDescriptionDiv.append(descriptionP);
        itemContainerDiv.append(productDescriptionDiv);

        //---------------------------------------------
        let purchaseDiv = document.createElement('div');
        purchaseDiv.classList.add('product-item-purchase');

        let priceSpan = document.createElement('span');
        priceSpan.innerText = `MRP Rs.${product.price}`;
        purchaseDiv.append(priceSpan);

        let buyButton = document.createElement('button');
        buyButton.innerText = 'Buy Now';
        purchaseDiv.append(buyButton);

        itemContainerDiv.append(purchaseDiv);
        productContainerEl.append(itemContainerDiv);
    })
}

function renderCategoryItems(selectedCategory) {
    selectedCategoryProducts = [];
    products1.forEach(p => {
        if (p.category === selectedCategory) {
            selectedCategoryProducts.push(p);
        }
    })
    renderProducts(selectedCategoryProducts)

}