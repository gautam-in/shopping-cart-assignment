let allProducts;
function categoryItem(item){
    let catItem = document.createElement("li");
    catItem.setAttribute("class", "category__item");
    catItem.setAttribute("data-id", `${item.id}`);
    catItem.innerHTML = item.name;
    catItem.addEventListener("click", changeCategoryHandler);
    document.querySelector('#filterContainer ul').append(catItem);
}
function changeCategoryHandler(e){
    let catVal;
    if(!e.currentTarget.classList.contains('selected')){
        diselectOthers(".category__item.selected", "selected");
        e.currentTarget.className += " selected";
        catVal = e.currentTarget.dataset.id;
    } else {
        e.currentTarget.classList.remove("selected");
        catVal = null;
    }
    const urlSearchParams = new URLSearchParams(window.location.search);
    if (catVal) {
        urlSearchParams.set('category', catVal);
    } else {
        urlSearchParams.delete('category');
    }
    window.history.replaceState({}, '', decodeURIComponent(`${window.location.pathname}?${urlSearchParams}`));
    filterProducts(true);
}
function filterProducts(isDefaultSelected){
    const url = new URL(window.location.href);
    const selectedCategory = url.searchParams.get("category");
    if(!isDefaultSelected && selectedCategory){
        selectDefualtCat(selectedCategory);
    }
    let filteredProducts;
    if(selectedCategory){
        filteredProducts = allProducts.filter(function(item){
            return selectedCategory === item.category;
        });
    } else {
        filteredProducts = allProducts;
    }
    
    document.querySelector("#productContainer ul").innerHTML = "";
    loadProduts(filteredProducts);
}
function selectDefualtCat(selectedCategory){
    const elems = document.querySelectorAll(".category__item");

    [].forEach.call(elems, function(el) {
        if(el.dataset.id === selectedCategory){
            el.className += " selected";
        }
    });
}

function loadProduts(products){
    for (let product of products) {
        productItem(product);
    }
}
function displayProducts(){
    let productsPromise = fetchData(PATHS.PRODUCTS);
    productsPromise.then((products) => {
        allProducts = products;
        filterProducts(false);
    });
}
function productItem(item){
    let productItem = document.createElement("li");
    productItem.setAttribute("class", "productCard__item");
    productItem.setAttribute("data-cat", `${item.category}`);

    let productItemContainer = document.createElement("div");

    let productTitle = document.createElement("h5");
    productTitle.setAttribute("class", "productCard__item__name");
    productTitle.innerHTML = item.name;
    productItemContainer.append(productTitle);

    let productDetails = document.createElement("div");
    productDetails.setAttribute("class", "productCard__item__details");

    let productImg = document.createElement("img");
    productImg.setAttribute("src", item.imageURL);
    productImg.setAttribute("alt", item.name);
    productImg.setAttribute("height", "150px");

    productDetails.append(productImg);

    let productDesc = document.createElement("p");
    productDesc.setAttribute("class", "productCard__item__desc");
    productDesc.innerHTML = item.description;
    productDetails.append(productDesc);

    productItemContainer.append(productDetails);

    let productItemAction = document.createElement("div");
    productItemAction.setAttribute("class", "productCard__item__action");

    let productItemPrice = document.createElement("span");
    productItemPrice.setAttribute("class", "productCard__item__action__price");
    productItemPrice.innerHTML = `MRP RS.${item.price}`;
    productItemAction.append(productItemPrice);

    let addToCartBtn = document.createElement("button");
    addToCartBtn.setAttribute("class", "btn btn-primary");
    addToCartBtn.addEventListener("click", addToCart);
    addToCartBtn.setAttribute("data-id", `${item.id}`);
    let addToCartPriceBtn = document.createElement("span");
    addToCartPriceBtn.setAttribute("class", "productCard__item__price--btn")
    addToCartPriceBtn.innerHTML = `@ RS.${item.price}`;
    addToCartBtn.innerHTML = "Buy now";
    addToCartBtn.append(addToCartPriceBtn);
    productItemAction.append(addToCartBtn);

    productItemContainer.append(productItemAction);
    productItem.append(productItemContainer)
    document.querySelector("#productContainer ul").append(productItem);
}
