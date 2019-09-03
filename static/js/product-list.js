/**
* Create immediately invoked function expression (IIFE)
*/
const productList = (function(){
    
    // Private method
    var products = [];
    
    //Private Method for product list data binding
    var getProductTemplate = (res) => {
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
    
    //Private Adding element in cart
    var addToCart = () => {
        let quantity = parseInt(document.getElementById("cart-item-quantity").textContent)+1
        document.getElementById("cart-item-quantity").textContent = quantity;
        document.querySelector('.qty').textContent= quantity;
    }   
    
    // Private methid to Register action Lister in Buy now button
    var registerListenerForBuyNowButton = () =>{
        var addToCartButton = document.querySelectorAll(".add-product-item"); 
        addToCartButton.forEach(function(addToCartButton){
            addToCartButton.addEventListener("click", addToCart);
        });
    };
    
    // Public methods
    return {
        //Call get category list API
        getProductList : function(apiUrl){
            apiService.getProductList({url: apiUrl})
            .then(res => {
                products = res;
                document.getElementsByClassName("product-section")[0].innerHTML = getProductTemplate(products);
                registerListenerForBuyNowButton();
            })
        },

        //Call get Categories List method to fetch data from API
        getCategories : function(apiUrl){
            apiService.getCategories({url: apiUrl})
            .then(res => {
                let contentBlock = "";
                res.forEach(element => {
                    if(element.enabled){
                        contentBlock+= `<div class="menu-items" onclick="productList.filterProducts('${element.id}', '${element.name}')"><p>${element.name}</p></div>`
                    }
                });
                document.getElementsByClassName("category-items")[0].innerHTML = contentBlock;
            });
        },
        //Private methid to Filter the product list according to category
        filterProducts : function (id, name){
            if(window.matchMedia("screen and (max-width: 767px)").matches){
                document.querySelector(".show-category-for-responsive").textContent = name;
                document.querySelector(".category-items").style.display = "none";
            }
            // Retrun the value according to categories id
            let filtered = products.filter(item => {
                return item.category == id;
            });
            document.getElementsByClassName("product-section")[0].innerHTML = getProductTemplate(filtered);
        }
    }
    
})();

//Call get category list API
productList.getProductList("http://localhost:3000/api/getProductList");
//Call get Categories List method to fetch data from API
productList.getCategories("http://localhost:3000/api/getCategories");