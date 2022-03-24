const serverURL = 'http://localhost:5001/';
const listOfProducts = [];

if (location.href.includes('plp.html')) {
    window.addEventListener('load', loadProducts);
}

async function loadProducts() {
    try {
        const productsContainer = document.querySelector('.products-container');
        const container = document.querySelector('.category-list');
        const upArrow = document.querySelector('.up-arrow');
        const downArrow = document.querySelector('.down-arrow');
        const noProducts = document.querySelector('.no-products');
        upArrow.style.display = 'none';

        productsContainer.addEventListener('click', () => {
            if (container.classList.toggle('category--opened')) {
                downArrow.style.display = 'none';
                upArrow.style.display = 'block';
            } else {
                downArrow.style.display = 'block';
                upArrow.style.display = 'none';
            }
        });

        const {
            categoryInfo,
            productInfo
        } = await fetchProductsFromServer();

        localStorage.setItem('productsList', JSON.stringify(productInfo));

        const selectedProducts = productInfo.filter(list =>
            list.category === productId()
        );

        noProducts.style.display = (selectedProducts.length !== 0) ? 'none' : 'block';
        processCategoryInfo(categoryInfo, container);
        processProductsInfo(isAllProductsSelected() ? productInfo : selectedProducts);

    } catch (error) {
        console.log(error);
    }
}

async function fetchProductsFromServer() {
    const categories = await fetch(serverURL + 'categories');
    const productList = await fetch(serverURL + 'products');
    const [categoryInfo, productInfo] = await Promise.all([categories.json(), productList.json()])
    return {
        categoryInfo,
        productInfo
    };
}

// category--opened

function processCategoryInfo(categories, container) {
    let category = '';
    if (!isAllProductsSelected()) {
        category = categories.find(el => el.id === location.href.split('#')[1]).name;
    } else {
        category = 'All Products'
    }
    const categoryList = categories.map(category => {
        return {
            name: category.name,
            id: category.id
        }
    });
    categoryList.push({
        name: 'All Products',
        id: 'all'
    });
    categoryList.forEach((el) => {
        const productNode = document.createElement('h3');
        productNode.innerHTML = el.name;
        productNode.classList.add('category-name');
        productNode.addEventListener('click', () => {
            // console.log(el.id);
            location.href = `../view/plp.html#${el.id}`;
            location.reload(true)
        });
        container.appendChild(productNode);
    });

    const productName = document.querySelector('.product-name');
    productName.innerHTML = `${category}`;

}

function processProductsInfo(products) {
    const cardSection = document.querySelector('.product-card-section');
    if (products.length === 0) return;

    products.forEach((product) => {
        const element = document.createElement('div');
        element.classList.add('product-card');
        element.innerHTML = `
            <h2 class="product-title">
                ${product.name}
            </h2>
            <img src="../..${product.imageURL}" alt="${product.description}" class="product-img">
            <p class="product-description">
                ${product.description}
            </p>
        `;
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('product-buy-now');
        buttonElement.innerText = `BuyNow@ MRP Rs${product.price}`;
        buttonElement.addEventListener('click', () => addProductToCart(product.id));
        element.appendChild(buttonElement);
        cardSection.appendChild(element);
    });
}

function addProductToCart(productId) {
    alert("Item added to the cart");
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const cartText = document.querySelector('.cart-item');
    products.push(productId);
    cartText.innerHTML = `${products.length} items`;
    localStorage.setItem('productCount', products.length);
    localStorage.setItem('products', JSON.stringify([...products]));
}

function goToCategorySection(categoryId) {
    location.href = `../view/plp.html#${categoryId}`;
}

function isAllProductsSelected() {
    return location.href.split('#')[1] === 'all';
}

function productId() {
    return location.href.split('#')[1];
}