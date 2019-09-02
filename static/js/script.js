/*
* Create a method to check login form field value
* If input field having any value then label will be move on top
*/
const validationForLabel = (field) =>{
    if(document.getElementById(field).value !== ''){
        document.getElementById(field).classList.add("has-text");
    }else{
        document.getElementById(field).classList.remove("has-text");
    }
}

/**
 * Create a methods for open/close shopping cart after clicking shopping button
 */
const openShoppingCart = () =>{
    if(window.matchMedia("screen and (min-width: 768px)").matches){
        // Calculate the width to show cart    
        var posLeft = document.querySelectorAll(".mini-cart")[0].offsetLeft + document.querySelectorAll(".mini-cart")[0].offsetWidth;
        document.getElementById("shopping-cart").style.right = (window.innerWidth - (posLeft + 15)) + "px";
    }
    if(parseInt(document.getElementById("cart-item-quantity").textContent) === 0){
        document.getElementById("add-to-cart").style.display = "none";
        document.getElementById("no-items").style.display = "block";
    }else{
        document.getElementById("no-items").style.display = "none";
        document.getElementById("add-to-cart").style.display= "block";      
    }
    document.getElementById("shopping-cart").style.display = "block";
}
const closeShoppingCart = (e) =>{
    e.stopPropagation();
    document.getElementById("shopping-cart").style.display = "none";
}

/**
* Add listener to increment the quantity of product available inside the cart
*/
document.querySelector('.plus').addEventListener("click", function(){
    let element = document.querySelector('.qty');
    let quantity = parseInt(element.textContent);
    element.textContent = quantity + 1;
    document.querySelector('.total-amt').textContent = parseInt(document.querySelector('.per-quantity-amt').textContent) * (quantity + 1);
    document.getElementById("cart-item-quantity").textContent = element.textContent;
});

/**
* Add listener to decrement the quantity of product available inside the cart
*/
document.querySelector('.minus').addEventListener("click", function(){
    let element = document.querySelector('.qty');
    let quantity = parseInt(element.textContent);   
    if(quantity > 1){
        element.textContent = quantity - 1;
        document.querySelector('.total-amt').textContent = parseInt(document.querySelector('.per-quantity-amt').textContent) * (quantity - 1);
        document.getElementById("cart-item-quantity").textContent = element.textContent;
    }else{
        document.getElementById("add-to-cart").style.display = "none";
        document.getElementById("no-items").style.display = "block";
        document.getElementById("cart-item-quantity").textContent = 0;
    }
});

/**
 * JS for Responsive Product category
 */
if(window.innerWidth < 768) {
    var categoryMenuItems = document.querySelectorAll(".category-items .menu-items");
    categoryMenuItems.forEach(function(item){
        item.onclick = function(e){
            document.querySelector(".show-category-for-responsive").textContent = e.target.textContent;
            document.querySelector(".category-items").style.display = "none";
        };
    });
}

/**
 * Adding element in cart
 */
const addToCart =()=>{
    let quantity = parseInt(document.getElementById("cart-item-quantity").textContent)+1
    document.getElementById("cart-item-quantity").textContent = quantity;
    document.querySelector('.qty').textContent= quantity;
};

/**
 * Adding listener to hiding shopping cart
 */
    document.querySelector('.shopping-btn').addEventListener("click", function(){
        document.getElementById("shopping-cart").style.display = "none";
    });