/**
* Create immediately invoked function expression (IIFE)
*/
var productList = (function(){
    
    // Private method
    var products = [];

    //API urls declaration
    var productsAPI = "http://localhost:3000/api/getProductList";
    var categoriesAPI = "http://localhost:3000/api/getCategories";
    var addToCartAPI = "http://localhost:3000/api/addToCart";

    /**
     * private Method for product list data binding
     * @param  {Object} response product list data
     */
    var getProductTemplate = (response) => {
        let contentBlock = "";
        response.forEach(element => {
            contentBlock += `<div class="products">
                <h3>${element.name}</h3>
                <img src="${element.imageURL}" alt="${element.name}">
                <p>${element.description}</p>
                <div class="price-button-section">
                    <div class="price">MRP Rs.${element.price}</div>
                    <button id="buy-now" aria-label="Byu Now" class="btn btn-primary add-product-item" value=${element.id}>Buy Now</button>
                </div>
                <div class="responsive-price-button-section">
                    <button id="buy-now" aria-label="Byu Now" class="btn btn-primary add-product-item" value=${element.id}>Buy Now @ MRP Rs.${element.price}</button>
                </div>
            </div>`;     
        });
        return contentBlock;
    };
    
    /**
     * private method to adding element in cart
     * @param  {Object} e refrence of current product element refrence
     */
    var addToCart = (e) => {
        apiService.addToCart({url: addToCartAPI, id: (e.target.value)})
        .then(res => {
            if(res.response === "Success"){
                let quantity = parseInt(document.getElementById("cart-item-quantity").textContent)+1
                document.getElementById("cart-item-quantity").textContent = quantity;
                let filtered = products.filter(item => {
                    return item.id == e.target.value;
                })[0];
                if(filtered) cart.setSession(filtered); //Set Session
            }
        });
    }   
    
    /**
     * private methid to Register action Lister in Buy now button
     */
    var registerListenerForBuyNowButton = () =>{
        var addToCartButton = document.querySelectorAll(".add-product-item"); 
        addToCartButton.forEach(function(addToCartButton){
            addToCartButton.addEventListener("click", e => addToCart(e));
        });
    };
    
    // Public methods
    return {
        /**
         * Call get category list API to fetch the data from API
         */
        getProductList : function(){
            apiService.getProductList({url: productsAPI})
            .then(res => {
                products = res;
                document.getElementsByClassName("product-section")[0].innerHTML = getProductTemplate(products);
                registerListenerForBuyNowButton();
            })
        },

        /**
         * Call get Categories List method to fetch data from API
         */
        getCategories : function(){
            apiService.getCategories({url: categoriesAPI})
            .then(res => {
                let contentBlock = "";
                res.forEach(element => {
                    if(element.enabled){
                        contentBlock+= `<div class="menu-items" id=${element.id} onclick="productList.filterProducts('${element.id}', '${element.name}')"><p>${element.name}</p></div>`
                    }
                });
                document.getElementsByClassName("category-items")[0].innerHTML = contentBlock;
            });
        },

        /**
         * Filter the product list according to category id
         * @param(String) id selected product Id
         * @param(String) name selected product name  
         */
        filterProducts : function ( id, name){
            productList.addAndRemoveClassess(id);
            if(window.matchMedia("screen and (max-width: 767px)").matches){
                document.querySelector(".show-category-for-responsive").textContent = name;
                document.querySelector(".category-items").style.display = "none";
            }
            // Retrun the value according to categories id
            let filtered = products.filter(item => {
                return item.category == id;
            });
            document.getElementsByClassName("product-section")[0].innerHTML = getProductTemplate(filtered);
        },
        /**
         * Add and remove class name from elements
         * @param(String) id selected product Id
         */
        addAndRemoveClassess : function (id){
            var els = document.querySelectorAll('.menu-items.active')
            for (var i = 0; i < els.length; i++) {
                els[i].classList.remove('active')
            }
            var element = document.getElementById(id);
            element.classList.add("active");
        },
        homePageFilter : function(Obj){
            console.log("calling", Obj.target);
            window.location.href = '/product-list';
        }
    }
    
})();

//Call get category list API
productList.getProductList();
//Call get Categories List method to fetch data from API
productList.getCategories();
//Bind the listener into category list
document.querySelector(".category-action").addEventListener("click", function() {
    document.querySelector(".category-items").style.display = "block";
});