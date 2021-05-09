import React from "react";
import Cart from "../../molecules/Cart/Cart";
import "./CartPage.scss";

function CartPage() {
  return (
    <div className="cart_page_container">
      <div className="cart_page_header">My Cart</div>
      <Cart />
    </div>
  );
}

export default CartPage;
