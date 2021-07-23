const DOMCartNumber = document.querySelector(".cart-items");
let numberOfItemsInCart = JSON.parse(localStorage.getItem("cart")) || [];

DOMCartNumber.textContent =
  numberOfItemsInCart.length > 0
    ? `${numberOfItemsInCart.length} items`
    : `0 items`;
