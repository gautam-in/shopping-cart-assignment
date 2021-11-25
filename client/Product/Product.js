/* Click on Category filter handler */
function onCategoryClickHandler(e) {
    localStorage.setItem("activeCategory",e.currentTarget.getAttribute("data-id"));
    let parentNode = e.currentTarget.parentNode;
    let isParentNodeNotActive = parentNode.getAttribute("class").indexOf("active") === -1;
    for(element of document.getElementsByClassName("filter-section-links-list-item")) {
        element.setAttribute("class","filter-section-links-list-item");
    }
    if(isParentNodeNotActive){
        parentNode.setAttribute("class","filter-section-links-list-item active");
    } else {
        localStorage.setItem("activeCategory","ALL");
    }
    populateProducts();
}

let totalItems = 0;
function onBuyClickHandler() {
    totalItems++;
    document.getElementById("totalItems").innerText = totalItems +  " items";
}

function onClickCartHandler(){
    document.getElementsByTagName("body")[0].setAttribute("class","no-scroll m-0");
    document.getElementById("miniCart").setAttribute("class","minicart-section show");
    if(totalItems > 0) {
        document.getElementById("miniCartContents").setAttribute("class","minicart-overlay d-flex flex-column show");
    } else {
        document.getElementById("miniCartEmpty").setAttribute("class","minicart-overlay d-flex flex-column show");
    }
    
}


/* Dom Manipulations */
function createFilterLiElement(category){            
    let categoryLiEl = createDomElement("li", {
        class: localStorage["activeCategory"] === category.id ? "filter-section-links-list-item active" : "filter-section-links-list-item"
    });
        let categoryButtonEl = createDomElement("button", {
            class: "category-desc text-align-center",
            'data-id': category.id
        });
        categoryButtonEl.addEventListener("click", onCategoryClickHandler);
        categoryButtonEl.innerText = category.name;
    categoryLiEl.appendChild(categoryButtonEl);
    return categoryLiEl;
}

function createProductDivElement(product) {
    let categoryDivCardEl = createDomElement("div", {
        class: "product-card d-flex flex-column"
    });

        let categoryDivCardh3El = createDomElement("h3");
        categoryDivCardh3El.innerText = product.name;
        categoryDivCardEl.appendChild(categoryDivCardh3El);

        let categoryDivCardimgEl = createDomElement("img",{
            class: "product-card-img",
            src: product.imageURL,
            alt: product.name + " image"
        });
        categoryDivCardEl.appendChild(categoryDivCardimgEl);

        let categoryDivCardparaEl = createDomElement("p",{
            class: "product-card-desc"
        });
        categoryDivCardparaEl.innerText = product.description;
        categoryDivCardEl.appendChild(categoryDivCardparaEl);

        let categoryDivCardDivEl = createDomElement("div",{
            class: "product-card-details d-flex justify-space-between align-items-center"
        });
            let categoryDivCardDivPriceEl = createDomElement("div",{
                class: "product-card-details-rate"
            });
            categoryDivCardDivPriceEl.innerText = "Rs." + product.price;
        
            let categoryDivCardDivbuttonEl = createDomElement("button",{
                class: "product-card-details-buy"
            });
            categoryDivCardDivbuttonEl.addEventListener("click", onBuyClickHandler);
           categoryDivCardDivbuttonEl.innerText = "Buy Now";

            categoryDivCardDivEl.appendChild(categoryDivCardDivPriceEl);
            categoryDivCardDivEl.appendChild(categoryDivCardDivbuttonEl);
        categoryDivCardEl.appendChild(categoryDivCardDivEl);
    return categoryDivCardEl;

}