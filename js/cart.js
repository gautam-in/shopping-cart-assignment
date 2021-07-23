// DOM
const DOMContent = document.querySelector(".modal-body");
const DOMButtonClearCart = document.querySelector(".clear-cart");
const DOMCartItem = document.querySelector(".cart-items");

let APIdataArr = JSON.parse(localStorage.getItem("APIDATA"));
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add items to the DOM
const addCartItem = (content) => {
  let DOMCartItem = document.createElement("tr");
  DOMCartItem.innerHTML = `<tr>
  <td>
    <div class="cart-info">
      <img src="${content.imageURL}" alt="">
      <div>
        <p><strong>${content.name}</strong></p>
        <small>Price per piece: ₹${content.price}</small>
        <p><i class="fas fa-minus-circle"></i>1<i class="fas fa-plus-circle"></i> x ₹${content.price}<p>
      </div>
    </div>
  </td>
</tr>`;
  DOMContent.appendChild(DOMCartItem);
};

// eslint-disable-next-line no-undef
for (item in cartItems) {
  // iterating over the cart
  APIdataArr.filter((data) => {
    // eslint-disable-next-line no-undef
    if (data.id === cartItems[item]) {
      addCartItem(data);
    }
  });
}

// Cart items in the nav bar
DOMCartItem.textContent = `${cartItems.length} items`;

// Function to clear the cart items
const clearCart = () => {
  localStorage.clear();
  DOMContent.innerHTML = `<h3>No items in your cart.</h3>
  <br />
  <p>Your favorite items are just a click away</p>`;
  document.querySelector(".final-checkout-plan").textContent = `Start Shopping`;
  document
    .querySelector(".final-checkout-plan")
    .addEventListener("click", function reDirectToShopping() {
      window.location = "products.html";
    });
  document.querySelector(".clear-cart").innerHTML = ``;
  DOMCartItem.textContent = 0;
  DOMButtonClearCart.style.display = "none";
};

// Removing cart specific things if the cart is empty
const checkCart = () => {
  if (cartItems.length === 0) {
    clearCart();
  }
};

// Adding clear cart functionality to the button
DOMButtonClearCart.addEventListener("click", clearCart);

// Adding check and clear cart functionality on winow onload
window.onload = checkCart;
