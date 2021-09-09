import "./cart.scss";
import html from "./cart.html";
import prod0 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"

localStorage.getItem('cartCounter')
? 
document.querySelector('.cart-count').textContent = localStorage.getItem('cartCounter') 
: document.querySelector('.cart-count').textContent = 0


function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem('totalCost');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-products");
    let shoppingCartDiv = document.querySelector(".shopping-cart");
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div class="product">
            <div class="product-image">
              <img src=${prod0}>
            </div>
            <div class="product-details">
              <div class="product-title">${item.name}</div>
            </div>
            <div class="product-price"> ${parseInt(item.price)}</div>
            <div class="product-quantity">
            ${item.inCart}
            </div>
            <div class="product-line-price"> ${item.inCart * parseInt(item.price) }</div>
          </div>`;
        })
        productContainer.innerHTML += `<div class="totals">
        <div class="totals-item">
          <label>Subtotal</label>
          <div class="totals-value" id="cart-subtotal"> ${cartCost}</div>
        </div>
      </div>
      <button class="checkout" onclick="cleanStorage()" >Proceed to Checkout <span>Rs ${cartCost}</span></button>`
    } else{
        shoppingCartDiv.innerHTML = `<h1 class="noCart-h1">No items in your cart</h1>
         <p class="noCart-p">Your favorite items are just a click away</p>
         <button class="checkout checkout1"><a href="index.html">Start Shopping<a/></button>`
    }
} 

window.cleanStorage = () =>{
  localStorage.clear(); 
   displayCart();
}

displayCart();