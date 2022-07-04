let productsData;
export async function productsLoad() {
    const response = await fetch('http://localhost:5000/products');
    productsData = await response.json();
}

const $ = document;
let categoryId;

export async function getCategoryList() {
    try {
        const response = await fetch('http://localhost:5000/categories');
        const categories = await response.json();
        let catDiv = document.getElementsByClassName('categories-list');
        //let mainDiv = document.getElementsByClassName('products-list');
        for (let i = 0; i < categories.length; i++) {
            let categoryTitle = $.createElement('div');
            categoryTitle.className = categories[i].id === categoryId ? 'cat-title active-click' : 'cat-title';
            categoryTitle.innerHTML = categories[i].name;
            categoryTitle.addEventListener('click', () => {
                if (categoryTitle.classList.contains('active-click')) {
                    categoryTitle.classList.remove('active-click');
                    categoryId = '';
                    updateProductList(null);

                } else {
                    updateProductList(categories[i]);
                }
                while (catDiv[0].firstChild) {
                    catDiv[0].removeChild(catDiv[0].firstChild);
                }
                getCategoryList();
            });
            catDiv[0].appendChild(categoryTitle);
        }


    } catch (e) {
        
    }
}

function updateProductList(category) {
    if (category !== null) {
        let categoryProducts = productsData.filter(product => product.category === category.id);
        categoryId = category.id;
        updateCategoryProducts(categoryProducts);
    } else {
        updateCategoryProducts(productsData);
    }

}

function updateCategoryProducts(products) {
    let mainDiv = document.getElementsByClassName('products-list');
    while (mainDiv[0].firstChild) {
        mainDiv[0].removeChild(mainDiv[0].firstChild);
    }

    for (let i = 0; i < products.length; i++) {
        let prodDiv = $.createElement('div');
        prodDiv.className = 'col-12 col-md-6 col-lg-4 col-xl-3 card-shadow col-width';
        //prodDiv.innerHTML = 'Products';
        let prodCardDiv = $.createElement('div');
        prodCardDiv.className = 'card';

        let prodCardBody = $.createElement('div');
        prodCardBody.className = 'card-body d-flex justify-content-between flex-column align-items-center card-align';

        let prodDescDiv = $.createElement('div');
        prodDescDiv.className = 'prod-info-top d-flex justify-content-between align-items-center flex-column';

        let cardTitle = $.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = products[i].name;

        let prodImage = $.createElement('img');
        prodImage.className = 'card-img-top';
        prodImage.setAttribute('src', products[i].imageURL);
        prodImage.setAttribute('alt', '...');
        prodImage.setAttribute('height', '100%')
        prodImage.setAttribute('weight', '100%');

        let prodDescription = $.createElement('p');
        prodDescription.className = 'card-text';
        prodDescription.innerHTML = products[i].description;

        prodDescDiv.appendChild(cardTitle);
        prodDescDiv.appendChild(prodImage);
        prodDescDiv.appendChild(prodDescription);

        let optionsDiv = $.createElement('div');
        optionsDiv.className = 'mrp d-flex justify-content-around';

        let mrp = $.createElement('p');
        mrp.className = 'card-link';
        mrp.innerHTML = `MRP Rs.${products[i].price}`;

        //Buy now button--------
        let addButton = $.createElement('button');
        addButton.className = 'btn btn-danger buy-now';
        addButton.innerHTML = 'Buy Now';
        addButton.addEventListener('click', () => {
            addItemToCart(products[i]);
        })

        optionsDiv.appendChild(mrp);
        optionsDiv.appendChild(addButton);

        prodCardBody.appendChild(prodDescDiv);
        prodCardBody.appendChild(optionsDiv);

        prodDiv.appendChild(prodCardBody);
        mainDiv[0].appendChild(prodDiv);
    }
}

export async function getProducts() {
    try {
        const response = await fetch('http://localhost:5000/products');
        const products = await response.json();
        //Update Products on the page
        updateCategoryProducts(products);

    } catch (e) {
    }
}

let productsList = [];
function addItemToCart(product) {

    productsList = JSON.parse(localStorage.getItem('cart')) || [];

    let productMatched = productsList.find(prod => product.id === prod.id);
    let filteredProductIndex = productsList.findIndex(p => p.id === product.id);
    if (productMatched) {
        productsList[filteredProductIndex]["qty"] += 1;
    } else {

        productsList.push({ ...product, qty: 1 });
    }

    //Adding cart data into localStorage API
    localStorage.setItem("cart", JSON.stringify(productsList || [], null, 2));

    // Adding cart counter
    let cart = document.querySelector('#cartAmount .counter');
    cart.textContent = JSON.parse(localStorage.getItem("cart")).length || 0;
}

function updateProductsCount(product, number) {
    let cartProducts = JSON.parse(localStorage.getItem('cart'));
    let filteredProductIndex = cartProducts.findIndex(p => p.id === product.id);
    cartProducts[filteredProductIndex]["qty"] = number;
    localStorage.setItem("cart", JSON.stringify(cartProducts || [], null, 2));
}

// show cart Items
export function showCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    let cartItemsDiv = $.getElementsByClassName('cart-items-container');
    while (cartItemsDiv[0].firstChild) {
        cartItemsDiv[0].removeChild(cartItemsDiv[0].firstChild);
    }
    let totalAMount = 0;
    for (let i = 0; i < cartItems.length; i++) {

        let cartItem = $.createElement('div'); //div for each card item
        cartItem.className = 'row cart-items';
        totalAMount += cartItems[i].qty * cartItems[i].price;

        let cartProduct = $.createElement('div');
        cartProduct.className = 'col-md-4';
        let productImage = $.createElement('img');
        productImage.className = 'product-image';
        productImage.setAttribute('src', cartItems[i].imageURL);
        productImage.setAttribute('alt', '');

        cartProduct.appendChild(productImage);

        let cartProductDescription = $.createElement('div');
        cartProductDescription.className = 'col-md-8';
        let productTitle = $.createElement('div');
        productTitle.className = 'cart-prod-title';
        productTitle.innerHTML = cartItems[i].name;

        let cartIcons = $.createElement('div');
        cartIcons.className = 'cart-icons d-flex justify-content-between';
        let addIcon = $.createElement('i'); //<i class="bi bi-plus-circle"></i>
        addIcon.className = 'bi bi-plus-circle';
        let minusIcon = $.createElement('i'); //<i class="bi bi-plus-circle"></i>
        minusIcon.className = 'bi bi-dash-circle';
        let quantitySpan = $.createElement('span');
        quantitySpan.className = 'product-qty';
        let priceDiv = $.createElement('div');
        priceDiv.className = 'prod-price';
        quantitySpan.textContent = cartItems[i].qty;
        let totalPriceDiv = $.createElement('div');
        totalPriceDiv.className = 'total-price';
        totalPriceDiv.innerHTML = `Rs ${cartItems[i].qty * cartItems[i].price}`;
        let mulIcon = $.createElement('i'); //<i class="bi bi-plus-circle"></i>
        mulIcon.className = 'bi bi-x';
        let priceSpan = $.createElement('span');
        priceSpan.className = 'product-qty';
        priceSpan.textContent = cartItems[i].price;
        priceDiv.appendChild(minusIcon);
        priceDiv.appendChild(quantitySpan);
        priceDiv.appendChild(addIcon);
        priceDiv.appendChild(mulIcon);
        priceDiv.appendChild(priceSpan);
        
        cartIcons.appendChild(priceDiv);
        cartIcons.appendChild(totalPriceDiv);

        cartProductDescription.appendChild(productTitle);
        cartProductDescription.appendChild(cartIcons);


        cartItem.appendChild(cartProduct);
        cartItem.appendChild(cartProductDescription);

        cartItemsDiv[0].appendChild(cartItem);

        minusIcon.addEventListener('click', () => {
            if (parseInt(quantitySpan.textContent) > 0) {
                //addItemToCart(cartItems[i]);
                quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
                totalPriceDiv.innerHTML = `Rs ${parseInt(quantitySpan.textContent) * cartItems[i].price}`;
                updateProductsCount(cartItems[i], parseInt(quantitySpan.textContent));
                let checkoutAmount = $.getElementsByClassName('amount');
                checkoutAmount[0].textContent = `${parseInt(checkoutAmount[0].textContent) - cartItems[i].price}`;
            }

        })
        addIcon.addEventListener('click', () => {
            //addItemToCart(cartItems[i]);
            quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
            totalPriceDiv.innerHTML = `Rs ${parseInt(quantitySpan.textContent) * cartItems[i].price}`;
            updateProductsCount(cartItems[i], parseInt(quantitySpan.textContent));
            let checkoutAmount = $.getElementsByClassName('amount');
            checkoutAmount[0].textContent = `${parseInt(checkoutAmount[0].textContent) + cartItems[i].price}`;

        })
    }

        let checkoutAmount = $.getElementsByClassName('amount');
        checkoutAmount[0].textContent = `${totalAMount}`;
    let cart = document.querySelector('#staticBackdropLabel .cart-counter');
    cart.textContent = JSON.parse(localStorage.getItem("cart")).length || 0;
}