let fragmentText = window.location.hash.substring(1);

// Setting Active class for category tabs
let categoryListDiv = document.querySelector(".category-list");
let tabs = categoryListDiv.getElementsByClassName("category-list__name");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (e) {
        let current = categoryListDiv.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

// Setting tabindex and arialabel for product cards
function setTabIndexAriaLabel() {
    document
        .querySelectorAll(
            ".product-card__name, .product-card__detail--description, .product-card__buy--price"
        )
        .forEach((el) => el.setAttribute("tabindex", 0));
    // document.querySelectorAll('.product-card button').forEach(el => el.setAttribute('aria-label', 'Buy ' + productCard.querySelector('h1').innerText));
}

// Dynamic loading of products
function loadAllProducts(ind) {
    switch (ind) {
        case 1:
            loadProductsBasedOnSelection(allProducts.fruitsVegetablesObj);
            break;
        case 2:
            loadProductsBasedOnSelection(allProducts.bakeryObj);
            break;
        case 3:
            loadProductsBasedOnSelection(allProducts.beveragesObj);
            break;
        case 4:
            loadProductsBasedOnSelection(allProducts.beautyHygieneObj);
            break;
        case 5:
            loadProductsBasedOnSelection(allProducts.babyCareObj);
            break;
        default:
            if (fragmentText.includes("fruits")) {
                loadProductsBasedOnSelection(allProducts.fruitsVegetablesObj);
                tabs[0].click();
                break;
            } else if (fragmentText.includes("bakery")) {
                loadProductsBasedOnSelection(allProducts.bakeryObj);
                tabs[1].click();
                break;
            } else if (fragmentText.includes("beverage")) {
                loadProductsBasedOnSelection(allProducts.beveragesObj);
                tabs[2].click();
                break;
            } else if (fragmentText.includes("beauty")) {
                loadProductsBasedOnSelection(allProducts.beautyHygieneObj);
                tabs[3].click();
                break;
            } else if (fragmentText.includes("baby")) {
                loadProductsBasedOnSelection(allProducts.babyCareObj);
                tabs[4].click();
                break;
            } else {
                loadProductsBasedOnSelection(allProducts.allObj);
                break;
            }
    }
}

function loadProductsBasedOnSelection(obj) {
    let productListRow = document.querySelector(".product-list-row");
    productListRow.innerHTML = "";
    Object.keys(obj).forEach((key) => {
        let productCardDiv = document.createElement("div");
        productCardDiv.classList.add("product-card");
        let h1 = document.createElement("h1");
        h1.classList.add("product-card__name");
        h1.innerText = obj[key].title;
        productCardDiv.appendChild(h1);
        let productCardDetailDiv = document.createElement("div");
        productCardDetailDiv.classList.add("product-card__detail");
        let img = document.createElement("img");
        img.classList.add("product-card__detail--img");
        img.src = `../static/images/products/${obj[key].imgSrc}`;
        img.alt = obj[key].imgAlt;
        img.setAttribute("aria-labelledby", obj[key].imgLabel);
        productCardDetailDiv.appendChild(img);
        let p = document.createElement("p");
        p.id = obj[key].imgLabel;
        p.classList.add("product-card__detail--description");
        p.innerText = obj[key].pDesc;
        productCardDetailDiv.appendChild(p);
        productCardDiv.appendChild(productCardDetailDiv);
        let productCardBuyDiv = document.createElement("div");
        productCardBuyDiv.classList.add("flex-row", "product-card__buy");
        let productCardBuyPriceDiv = document.createElement("div");
        productCardBuyPriceDiv.classList.add(
            "flex-row",
            "product-card__buy--price"
        );
        productCardBuyPriceDiv.innerText = obj[key].priceText;
        productCardBuyDiv.appendChild(productCardBuyPriceDiv);
        let btn = document.createElement("button");
        btn.classList.add("flex-row", "btn", "product-card__buy--btn");
        btn.setAttribute("aria-label", h1.innerText);
        let span = document.createElement("span");
        span.classList.add("product-card__buy--sm-txt");
        span.innerText = obj[key].priceText.replace("MRP ", " @ ");
        btn.innerHTML = `Buy Now `;
        btn.appendChild(span);
        productCardBuyDiv.appendChild(btn);
        productCardDiv.appendChild(productCardBuyDiv);
        productListRow.appendChild(productCardDiv);
    });
    setTabIndexAriaLabel();
}
loadAllProducts();
