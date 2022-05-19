import { callApi, addToCart } from './utils'

let activeCategory = null;

let isMobileDevice = screen.width < 768;


// Toggle Categoy Products on Click
const showCategoryProducts = (productID, categoryLI, categoryName) => {
    
    const allCategoryLI = Array.from(document.querySelectorAll('.category_ul .category_item'));
    const allProducts = Array.from(document.querySelectorAll(`.product_list .product_item`));
    const matchedProducts = Array.from(document.querySelectorAll(`.product_list .product_item[data-categoryid="${productID}"]`));
    const activeCategoryDropdown = document.querySelector('.active_category');
    const categoryUL = document.querySelector('.side_nav .category_ul');

    if (activeCategory === productID) {
        // Show all Products on Category Click toggle
        activeCategory = null;
        allCategoryLI.forEach(category => category.classList.remove('active'));
        allProducts.forEach(product => product.classList.remove('hide'));
        categoryLI.classList.remove('active');
        activeCategoryDropdown.innerHTML = 'Select Category';

    } else {
        // Show Category Products on Category Click toggle
        activeCategory = productID;
        allCategoryLI.forEach(category => category.classList.remove('active'));
        allProducts.forEach(product => product.classList.add('hide'));
        matchedProducts.forEach(product => product.classList.remove('hide'));
        categoryLI.classList.add('active');
        activeCategoryDropdown.innerText = categoryName;
    }

    isMobileDevice ? categoryUL.classList.add('hide') : null;

}

// Toggle Category Dropdown
const toggleCategoryDropdownXS = (dropdownElem) => {
    dropdownElem.classList.toggle('active');
    document.querySelector('.side_nav .category_ul').classList.toggle('hide');
}

// Fetch Categoy List in Sidebar
const showCategoryList = async () => {
    const categoryList = await callApi('GET', 'categories');
    const categorySection = document.querySelector('#category_list .section_wrapper');
    const sideNavParent = document.createElement('aside');
    sideNavParent.className = `side_nav`;

    const sideNavUl = document.createElement('ul');
    sideNavUl.className = `category_ul ${isMobileDevice ? 'hide' : ''}`;

    const categoryParam = new URL(location.href).searchParams.get('category');

    categoryList.forEach((category, index) => {
        const sideNavListItem = document.createElement('li');
        sideNavListItem.className = `category_item ${category.id === categoryParam ? 'active' : null }`;
        sideNavListItem.appendChild(document.createTextNode(`${category.name}`));
        sideNavListItem.setAttribute('data-id', category.id);
        sideNavListItem.addEventListener('click', () => showCategoryProducts(category.id, sideNavListItem, category.name));
        sideNavUl.appendChild(sideNavListItem);
    });
    
    sideNavParent.appendChild(sideNavUl);
    categorySection.appendChild(sideNavParent);

    // Creating dropdown for mobile view
    const elem = document.createElement('p');
    elem.className = "active_category xs-show"
    elem.innerText = 'Select Category';
    const target = document.querySelector('.category_ul');
    target.parentNode.insertBefore(elem, target);
    elem.addEventListener('click', () => toggleCategoryDropdownXS(elem));

}

// Fetch Product List
const showProductList = async () => {
    const products = await callApi('GET', 'products');
    const categoryWrapper = document.querySelector('#category_list .section_wrapper');
    const productsUl = document.createElement('ul');
    productsUl.className = `product_list flex_view_xs`;


    products.forEach((product, index) => {

        // LI
        const productLi = document.createElement('li');
        productLi.className = `product_item`;
        productLi.setAttribute('data-categoryid', product.category);


        // Inner
        const productWrapper = document.createElement('div');
        productWrapper.className = `inner`;

        // Product Title
        const productTitle = document.createElement('h3');
        productTitle.className = `title`;
        productTitle.appendChild(document.createTextNode(product.name));
        productWrapper.appendChild(productTitle);

        // Product Image
        const productImage = document.createElement('img');
        productImage.src = `../..${product.imageURL}`;
        productImage.className = `xs-hide`;
        productImage.alt = `../..${product.name}`;
        productWrapper.appendChild(productImage);

        // Product Description
        const productDescription = document.createElement('div');
        productDescription.className = `descr xs-hide`;
        const productDescriptionText = document.createElement('p');
        productDescriptionText.appendChild(document.createTextNode(product.description));
        productDescription.appendChild(productDescriptionText);
        productWrapper.appendChild(productDescription);


        // Buy Product Button
        const productBuy = document.createElement('div');
        productBuy.className = `buy flex_view middle space-between xs-hide`;

        const productPrice = document.createElement('p');
        productPrice.className = `price`;
        productPrice.appendChild(document.createTextNode(`MRP Rs. ${product.price}`));
        productBuy.appendChild(productPrice);

        const productBuyBtn = document.createElement('button');
        productBuyBtn.className = `btn buy_btn`;
        productBuyBtn.setAttribute('data-id', product.id);
        productBuyBtn.appendChild(document.createTextNode(`Buy Now`));
        productBuy.appendChild(productBuyBtn);
        productWrapper.appendChild(productBuy);

        // Adding wrapper to Mobile Device
        const productMobileWrapper = document.createElement('div');
        productMobileWrapper.className = `descr_xs flex_view_xs xs-show`;

        // Image XS
        const productMobileImagewrapper = document.createElement('div');
        productMobileImagewrapper.className = `product_img_xs`;

        const productImageXS = document.createElement('img');
        productImageXS.src = `../..${product.imageURL}`;
        productImageXS.className = `xs-show`;
        productImageXS.alt = `../..${product.name}`;
        productMobileImagewrapper.appendChild(productImageXS);
        productMobileWrapper.appendChild(productMobileImagewrapper);
        productWrapper.appendChild(productMobileWrapper);

        // Description XS
        const productDescriptionXS = document.createElement('div');
        productDescriptionXS.className = `product_descr_xs`;
        const productDescriptionTextXs = document.createElement('p');
        productDescriptionTextXs.appendChild(document.createTextNode(product.description));
        productDescriptionXS.appendChild(productDescriptionTextXs);
        productMobileWrapper.appendChild(productDescriptionXS);


        // Buy Button XS
        const productBuyBtnXS = document.createElement('button');
        productBuyBtnXS.className = `btn buy_btn_xs btn-full`;
        productBuyBtnXS.setAttribute('data-id', product.id);
        productBuyBtnXS.appendChild(document.createTextNode(`Buy Now @ MRP Rs. ${product.price}`));
        productDescriptionXS.appendChild(productBuyBtnXS);



        // Buy Button Click
        productBuyBtn.addEventListener('click', (event) => addToCart(product, event));
        productBuyBtnXS.addEventListener('click', (event) => addToCart(product, event));

        // Append All Elements
        productLi.appendChild(productWrapper);
        productsUl.appendChild(productLi);



    });

    categoryWrapper.appendChild(productsUl);

    // iF there is Category Parameter in URL string, load products of that category
    const categoryParam = new URL(location.href).searchParams.get('category');
    if (categoryParam) {
        const activeCategory = document.querySelector(`.category_ul .category_item[data-id="${categoryParam}"]`);
        activeCategory.click();
    }
    
}


const loadProductListingPage = async () => {
    await showCategoryList();
    await showProductList();
}

if (document.URL.includes("product-listing.html")) {
    loadProductListingPage();

    // Toggle Category Side nav visibility based on window resize
    window.addEventListener('resize', ()=> {
        isMobileDevice = screen.width < 768;
        const categoryUL = document.querySelector('.side_nav .category_ul');
        isMobileDevice ? categoryUL.classList.add('hide') : categoryUL.classList.remove('hide')
    });
};