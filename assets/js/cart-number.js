const DOMCartNumber = document.querySelector(".cart-items");
const DOMCartTotal = document.querySelector(".numberOfItems");
 cartItems = JSON.parse(localStorage.getItem("cart")) || [];
 APIdataArr = JSON.parse(localStorage.getItem("APIDATA"));
console.log(APIdataArr);
DOMCartNumber.textContent = cartItems.length > 0 ? `${cartItems.length} items` : `0 items`;
DOMCartTotal.textContent = cartItems.length > 0 ? `${cartItems.length} items` : `0 items`;