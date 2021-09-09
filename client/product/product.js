/* Click on Category filter handler */
function onCategoryClickHandler(e) {
    localStorage.setItem("activeCategory",e.currentTarget.getAttribute("data-id"));
    
    let parentNode = e.currentTarget.parentNode;
    let isParentNodeNotActive = parentNode.getAttribute("class").indexOf("active") === -1;
    
    // set all to inactive
    for(element of document.getElementsByClassName("filter-section-links-list-item")) {
        element.setAttribute("class","filter-section-links-list-item");
    }

    //toggle active class and activeCategory  
    if(isParentNodeNotActive){
        parentNode.setAttribute("class","filter-section-links-list-item active");
    } else {
        localStorage.setItem("activeCategory","ALL");
    }

    // rerender to update
    populateProducts();
}

let totalItems = 0;
function onBuyClickHandler() {
    totalItems++;
    // TODO Fetch POST to be called
    document.getElementById("totalItems").innerText = totalItems +  " items";
}

function onClickCartHandler(){
    document.getElementsByTagName("body")[0].setAttribute("class","no-scroll m-0");
    document.getElementById("miniCart").setAttribute("class","minicart-section show");
}


/* Dom Manipulations */
function createFilterLiElement(category){
    // <li class="filter-section-links-list-item">
    //     <button onclick="">Bakery cakes diary</button>
    // </li>            
    let categoryLiEl = createDomEle("li", {
        class: localStorage["activeCategory"] === category.id ? "filter-section-links-list-item active" : "filter-section-links-list-item"
    });
        let categoryButtonEl = createDomEle("button", {
            class: "category-desc text-align-center",
            'data-id': category.id
        });
        categoryButtonEl.addEventListener("click", onCategoryClickHandler);
        categoryButtonEl.innerText = category.name;
    categoryLiEl.appendChild(categoryButtonEl);
    return categoryLiEl;
}

function createProductDivElement(product) {
    // <div class="product-card d-flex flex-column">
    //     <h3>Greek Yogurt Tomato locally grown 3 pcs fresh veg</h3>
    //     <img class="product-card-img" src="../../static/images/products/fruit-n-veg/capsicum-green.jpg" />
    //     <p class="product-card-desc">This is greek yogurt ...</p>
    //     <div class="product-card-details d-flex justify-space-between align-items-center">
    //         <div class="product-card-details-rate">MRP Rs.40</div>
    //         <button class="product-card-details-buy">Buy Now</button>
    //     </div>
    // </div>
    let categoryDivCardEl = createDomEle("div", {
        class: "product-card d-flex flex-column"
    });

        let categoryDivCardh3El = createDomEle("h3");
        categoryDivCardh3El.innerText = product.name;
        categoryDivCardEl.appendChild(categoryDivCardh3El);

        let categoryDivCardimgEl = createDomEle("img",{
            class: "product-card-img",
            src: product.imageURL,
            alt: product.name + " image"
        });
        categoryDivCardEl.appendChild(categoryDivCardimgEl);

        let categoryDivCardparaEl = createDomEle("p",{
            class: "product-card-desc"
        });
        categoryDivCardparaEl.innerText = product.description;
        categoryDivCardEl.appendChild(categoryDivCardparaEl);

        let categoryDivCardDivEl = createDomEle("div",{
            class: "product-card-details d-flex justify-space-between align-items-center"
        });
            let categoryDivCardDivPriceEl = createDomEle("div",{
                class: "product-card-details-rate"
            });
            categoryDivCardDivPriceEl.innerText = "Rs." + product.price;
        
            let categoryDivCardDivbuttonEl = createDomEle("button",{
                class: "product-card-details-buy"
            });
            categoryDivCardDivbuttonEl.addEventListener("click", onBuyClickHandler);
           categoryDivCardDivbuttonEl.innerText = "Buy Now";

            categoryDivCardDivEl.appendChild(categoryDivCardDivPriceEl);
            categoryDivCardDivEl.appendChild(categoryDivCardDivbuttonEl);
        categoryDivCardEl.appendChild(categoryDivCardDivEl);
    return categoryDivCardEl;

}