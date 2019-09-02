/**
* Call product List method to fetch data from API
* After getting product data bind the data with html element and add into DOM
*/

let products = [];

const getProductTemplate = (res) =>{
    let contentBlock = "";
    res.forEach(element => {
        contentBlock += `<div class="products">
            <h3>${element.name}</h3>
            <img src="${element.imageURL}" alt="${element.name}">
            <p>${element.description}</p>
            <div class="price-button-section">
                <div class="price">MRP Rs.${element.price}</div>
                <button class="btn btn-primary add-product-item">Buy Now</button>
            </div>
            <div class="responsive-price-button-section">
                <button class="btn btn-primary add-product-item">Buy Now @ MRP Rs.${element.price}</button>
            </div>
        </div>`;     
    });
    return contentBlock;
};

/**
 * Filter the product list according to category
 */
const filterProducts = (id, name) =>{
    if(window.matchMedia("screen and (max-width: 767px)").matches){
        document.querySelector(".show-category-for-responsive").textContent = name;
        document.querySelector(".category-items").style.display = "none";
    }
    // Retrun the value according to categories id
    let filtered = products.filter(item => {
        return item.category == id;
    });
    document.getElementsByClassName("product-section")[0].innerHTML = getProductTemplate(filtered);
};
/**
 * Register action Lister in Buy now button
 */
const registerListenerForBuyNowButton = () =>{
    var addToCartButton = document.querySelectorAll(".add-product-item"); 
    addToCartButton.forEach(function(addToCartButton){
        addToCartButton.addEventListener("click", addToCart);
    });
};

/**
 * Call get category list API
 */
apiService.getProductList({url: "http://localhost:3000/api/getProductList"})
    .then(res => {
        products = res;
        document.getElementsByClassName("product-section")[0].innerHTML = getProductTemplate(products);
        registerListenerForBuyNowButton();

    });

/**
* Call get Categories List method to fetch data from API
* After getting categories list data bind the data with html element and add into DOM
*/
apiService.getCategories({url: "http://localhost:3000/api/getCategories"})
    .then(res => {
        let contentBlock = "";
        res.forEach(element => {
            if(element.enabled){
                contentBlock+= `<div class="menu-items" onclick="filterProducts('${element.id}', '${element.name}')"><p>${element.name}</p></div>`
            }
        });
        document.getElementsByClassName("category-items")[0].innerHTML = contentBlock;
    });