// DOM
const DOMContent = document.querySelector(".modal-body");
const DOMButtonClearCart = document.querySelector(".clear-cart");
const DOMCartItem = document.querySelector(".cart-items");



 APIdataArr = JSON.parse(localStorage.getItem("APIDATA"));
 cartItems = JSON.parse(localStorage.getItem("cart")) || [];
console.log(DOMCartItem);
console.log(APIdataArr);


// Function to clear the cart items
const clearCart = () => {
  localStorage.removeItem("cart");
  DOMContent.innerHTML = `<h3>No items in your cart.</h3>
  <br />
  <p>Your favorite items are just a click away</p>`;
  document.querySelector(".final-checkout-plan").textContent = `Start Shopping`;
  document.querySelector(".final-checkout-plan").addEventListener('click', function reDirectToShopping() {
    window.location = "products.html"
  })
  document.querySelector(".clear-cart").innerHTML = ``;
  DOMCartItem.textContent = "0 items" ;
  DOMCartTotal.textContent = "0 items";
  DOMButtonClearCart.style.display = "none";
 DOMSubTotal.textContent = "0";

};


// Removing cart specific things if the cart is empty
const checkCart = (cartItems) => {
  if (cartItems.length === 0) {
    clearCart();
    console.log(cartItems);
    return true;
  }
  console.log(cartItems);
  return false;
};

// Adding clear cart functionality to the button
// if(DOMButtonClearCart){
//   DOMButtonClearCart.addEventListener("click", clearCart);

// }
DOMButtonClearCart.addEventListener("click", clearCart);
// Adding check and clear cart functionality on winow onload
window.onload = checkCart(cartItems);
