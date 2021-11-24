let productsResponse;

function populateCategories(response) {
    let categories = sortArray(response, "order");
    categories.forEach((category, index) => {
        if(category.enabled){
            document.getElementById("filters").appendChild(createFilterLiElement(category)); 
        }
    });
}

function fetchCategories() {
    fetch("http://localhost:5000/categories").then(res => res.json()).then(response => {
        populateCategories(response);
    });
}

/* Carousel fetch call and handler*/
function populateProducts(overWriteCategory) {
    if(overWriteCategory) localStorage["activeCategory"] = overWriteCategory;
    document.getElementById("products").innerHTML = ""; 
    productsResponse.forEach((product, index) => {
        if(product.category === localStorage["activeCategory"] 
            || localStorage["activeCategory"] === "ALL") {
            document.getElementById("products").appendChild(createProductDivElement(product)); 
        }
    });
}

function fetchProducts() {
    fetch("http://localhost:5000/products").then(res => res.json()).then(response => {
        productsResponse = response;
        populateProducts(localStorage["activeCategory"] ? localStorage["activeCategory"] : "ALL");
    });
}
fetchProducts();
fetchCategories();