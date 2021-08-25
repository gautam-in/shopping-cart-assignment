function loadProductListingPage() {
    setHeaderElement();
    setProductListingPageBodyContent();
}

//product listing page body
function setProductListingPageBodyContent() {
    var availableCategories = [];
    fetch(requestUrl + "categories")
        .then((res) => res.json())
        .then((data) => {
            data.forEach(
                ({ id, name, enabled }) =>
                    enabled &&
                    availableCategories.push({
                        id,
                        name,
                    })
            );
            var categories = document.createElement("div");
            categories.setAttribute("class", "filter-div");
            availableCategories.forEach((item) => {
                var filterElement = document.createElement("div");
                categories.appendChild(createFilterElement(filterElement, item));
            });
            document.querySelector("main").appendChild(categories);
            loadProducts();
        })
        .catch((error) => console.log({ error }));
}
function loadProducts() {
    fetch(requestUrl + "products")
        .then((res) => res.json())
        .then((data) => {
            var products = document.createElement("div");
            products.setAttribute("class", "products-div");
            data.forEach((item) => {
                var product = document.createElement("div");
                product.setAttribute("class", "product");
                products.appendChild(createProducts(product, item));
            });
            document.querySelector("main").appendChild(products);
        })
        .catch((err) => console.log({ error: err }));
}
function createFilterElement(element, { id, name }) {
    var filterTextElement = document.createElement("h3");
    filterTextElement.innerText = name;

    element.setAttribute("id", id);
    element.setAttribute("onclick", "handleFilter(event)");
    element.appendChild(filterTextElement);

    return element;
}
function handleFilter(e) {
    [...document.querySelectorAll(".filter-div div")].forEach((item) => {
        item.classList.remove("selected-filter");
    });
    var filterElement = e.target.parentNode;
    filterElement.classList.toggle("selected-filter");
    if (filterElement.classList.contains("selected-filter")) {
        selectedCategories = [filterElement.getAttribute("id")];
    } else {
        selectedCategories = selectedCategories.filter((item) => item !== filterElement.getAttribute("id"));
    }
    // console.log(selectedCategories);
    [...document.querySelector(".products-div").childNodes].forEach((item) => {
        if (selectedCategories.includes(item.getAttribute("data-category"))) {
            item.style.display = "initial";
        } else {
            item.style.display = "none";
        }
    });
}
function createProducts(element, productDetails) {
    var productTitle = document.createElement("div");
    productTitle.setAttribute("class", "product-title");
    var titleText = document.createElement("h2");
    titleText.innerText = productDetails.name;
    productTitle.appendChild(titleText);

    var productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image");
    var image = document.createElement("img");
    image.setAttribute("src", ".." + productDetails.imageURL);
    image.setAttribute("alt", productDetails.name + "-img");
    productImage.appendChild(image);

    var productDescription = document.createElement("p");
    productDescription.setAttribute("class", "product-description");
    productDescription.innerText =
        productDetails.description.length > 190 ? productDetails.description.substr(0, 190) + " ..." : productDetails.description;

    var productPrice = document.createElement("div");
    productPrice.setAttribute("class", "product-price");
    var priceText = document.createElement("h3");
    priceText.innerText = "MRP Rs. " + productDetails.price;
    productPrice.appendChild(priceText);

    var buyButton = document.createElement("button");
    buyButton.setAttribute("class", "btn buy-btn");
    buyButton.innerText = "Buy now";
    var productDetailsString = JSON.stringify({
        imageURL: productDetails.imageURL,
        title: productDetails.name,
        price: productDetails.price,
        id: productDetails.id,
    });
    buyButton.setAttribute("onclick", "handleBuy(event," + productDetailsString + ")");

    element.setAttribute("id", productDetails.id);
    element.setAttribute("data-available-stock", productDetails.stock);
    element.setAttribute("data-category", productDetails.category);
    element.appendChild(productTitle);
    element.appendChild(productImage);
    element.appendChild(productDescription);
    element.appendChild(productPrice);
    element.appendChild(buyButton);

    return element;
}
function handleBuy(e, { imageURL, title, price, id }) {
    var product = e.target.parentNode;
    var currentStock = Number(product.getAttribute("data-available-stock"));
    if (currentStock > 0) {
        fetch(requestUrl + "addToCart", {
            method: "POST",
            body: {
                productID: id,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.response == "Success") {
                    currentStock -= 1;
                    product.setAttribute("data-available-stock", currentStock);
                    var cartText = document.querySelector(".cart > h4");
                    var noOfItemsInCart = Number(cartText.innerText.split(" ")[0]) + 1;
                    cartText.innerText = noOfItemsInCart + " items";
                    if (cartItems[product.id]) {
                        cartItems[product.id]["count"] += 1;
                    } else {
                        cartItems[product.id] = {
                            imageURL,
                            title,
                            price,
                            count: 1,
                        };
                    }
                } else {
                    throw new Error("Something went wrong !");
                }
            })
            .catch((error) => console.log({ error }));
        // console.log(cartItems);
        //Start here -- writng cart logic
    } else {
        product.lastChild.innerText = "Out of stock";
        product.lastChild.disabled = true;
    }
}
