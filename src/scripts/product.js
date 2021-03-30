import { getCategoriesData, getProductsData } from "../services/getData.js";
import "regenerator-runtime/runtime";
document.addEventListener('DOMContentLoaded', () => {
    let defaultCategoryID;
    getCategoriesData().then((data) => {
        renderCategoriesPane(data);
        defaultCategoryID = data[0].id;
    })
    getProductsData().then(data => {
        productData = data;
        const categoryID = sessionStorage.getItem('categorySelected') || defaultCategoryID;
        filterProducts(categoryID)
    });
});


var productData;

function renderProducts(data) {
    const productsViewDiv = document.querySelector(".products-view");
    productsViewDiv.innerHTML = '';

    data.forEach(product => {
        const productItemDiv = document.createElement('div');
        productItemDiv.classList.add("product-item");
        productItemDiv.classList.add("p-2");
        productItemDiv.classList.add('col-lg-3');
        productItemDiv.classList.add('col-md-6');
        productItemDiv.classList.add('col-sm-12');

        const header = document.createElement("h4");
        header.textContent = product.name;

        const img = document.createElement("img");
        img.src = product.imageURL;
        img.width = 200;
        img.height = 200;

        const description = document.createElement("p");
        description.classList.add("bg-hightlight");
        description.classList.add("p-1");
        description.textContent = product.description;

        const spanSmallScreen = document.createElement("span");
        spanSmallScreen.classList.add("d-sm-none");
        const buttonSmallScreen = document.createElement("button");
        buttonSmallScreen.classList.add("btn");
        buttonSmallScreen.classList.add("btn-pink");
        buttonSmallScreen.classList.add("w-100");
        buttonSmallScreen.textContent = `Buy Now @ Rs ${product.price}`;
        buttonSmallScreen.id = product.id;
        spanSmallScreen.appendChild(buttonSmallScreen);

        const spanBigScreen = document.createElement("span");
        spanBigScreen.classList.add("d-none");
        spanBigScreen.classList.add("d-sm-flex");
        spanBigScreen.classList.add("justify-content-between");
        spanBigScreen.textContent = `MRP Rs ${product.price}`;
        const buttonBigScreen = document.createElement("button");
        buttonBigScreen.classList.add("btn");
        buttonBigScreen.classList.add("btn-pink");
        buttonBigScreen.classList.add("w-50");
        buttonBigScreen.textContent = "Buy Now";
        buttonBigScreen.id = product.id;

        spanBigScreen.appendChild(buttonBigScreen);

        productItemDiv.appendChild(header);
        productItemDiv.appendChild(img);
        productItemDiv.appendChild(description);
        productItemDiv.appendChild(spanBigScreen);
        productItemDiv.appendChild(spanSmallScreen);

        productsViewDiv.appendChild(productItemDiv);
    })
}

function renderCategoriesPane(data) {
    const categoriesPane = document.querySelector('.categories-pane');
    data.forEach((element) => {
        if (element.enabled) {
            const buttonEle = document.createElement('button');
            buttonEle.classList.add('list-group-item');
            buttonEle.classList.add('llist-group-item-action');
            buttonEle.textContent = element.name;
            buttonEle.href = '#';
            buttonEle.id = element.id;
            categoriesPane.appendChild(buttonEle);
        }
    });
}

const categoryPane = document.querySelector('.categories-pane');
categoryPane.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        filterProducts(button.id);
    }
});

function filterProducts(id) {
    const filteredData = productData.filter((x) => x.category === id);
    renderProducts(filteredData);
}