/**
* Create immediately invoked function expression (IIFE)
*/
var productList = (function(){
    
    // Private method
    var products = [];

    /**
     * private Method for product list data binding
     * @param  {Object} response product list data
     */
    var getProductTemplate = (response) => {
        let contentBlock = "";
        response.forEach(element => {
            contentBlock += `<div class="product-list__products">
                                <h3>${element.name}</h3>
                                <img class="product-list__products--img" src="${element.imageURL}" alt="${element.name}">
                                <p>${element.description}</p>
                                <div class="product-list__products--button">
                                <div class="price">MRP Rs.${element.price}</div>
                                <button id="buy-now" aria-label="Byu Now" class="btn btn-primary product-list__products--item" value=${element.id}>${i18[locale].buy}</button>
                            </div>
                            <div class="product-list__products--mob-button">
                                <button id="buy-now" aria-label="Byu Now" class="btn btn-primary product-list__products--item" value=${element.id}>${i18[locale].buy} @ MRP Rs.${element.price}</button>
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
        apiService.addToCart({url: END_POINTS.ADDTOCART, id: (e.target.value)})
        .then(res => {
            if(res.status === 200){
                let quantity = parseInt(document.getElementById(CONSTANS.CART_ITEM_QUANTITY).textContent)+1
                document.getElementById(CONSTANS.CART_ITEM_QUANTITY).textContent = quantity;
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
        var addToCartButton = document.querySelectorAll(CONSTANS.PRODUCT_BTN); 
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
            apiService.getProductList({url: END_POINTS.PRODUCTS})
            .then(res => {
                products = res;
                document.getElementsByClassName("product-list")[0].innerHTML = getProductTemplate(products);
                registerListenerForBuyNowButton();
            })
        },

        /**
         * Call get Categories List method to fetch data from API
         */
        getCategories : function(){
            apiService.getCategories({url: END_POINTS.CATEGORIES})
            .then(res => {
                let contentBlock = "";
                res.forEach(element => {
                    if(element.enabled){
                        contentBlock+= `<div class="sidebar__items--menu" id=${element.id} onclick="productList.filterProducts('${element.id}', '${element.name}')"><p>${element.name}</p></div>`
                    }
                });
                document.getElementsByClassName("sidebar__items")[0].innerHTML = contentBlock;
            });
        },

        /**
         * Filter the product list according to category id
         * @param(String) id selected product Id
         * @param(String) name selected product name  
         */
        filterProducts : function ( id, name){
            let status = productList.addAndRemoveClassess(id);
            if(window.matchMedia("screen and (max-width: 767px)").matches){
                document.querySelector(".sidebar__action--mobile").textContent = name;
                document.querySelector(".sidebar__items").style.display = "none";
            }
            // Retrun the value according to categories id
            let filtered = products.filter(item => {
                return item.category == id;
            });
            document.getElementsByClassName("product-list")[0].innerHTML = getProductTemplate(status ? filtered : products);
        },
        /**
         * Add and remove class name from elements
         * @param(String) id selected product Id
         */
        addAndRemoveClassess : function (id){
            var els = document.querySelectorAll('.sidebar__items--menu.active');
            var previous_id = 0;
            var status = false;
            for (var i = 0; i < els.length; i++) {
                els[i].classList.remove('active');
                previous_id = els[i].id;
            }
            if(previous_id !== id){
                var element = document.getElementById(id);
                element.classList.add("active");
                status = true;
            }
            return status;
        }
    }
    
})();

//Call get category list API
productList.getProductList();
//Call get Categories List method to fetch data from API
productList.getCategories();
//Bind the listener into category list
document.querySelector(".sidebar__action").addEventListener("click", function() {
    document.querySelector(".sidebar__items").style.display = "block";
});