import React from "react";
import "./CartButton.scss";
/* import { cart } from "/client/static/index"; */

import cart from "/static/images/cart.svg";

function CartButton() {
  return (
    <button className="cart_button">
      <img src={cart} alt="Cart" className="cart_img" />
      <span>0 items</span>
    </button>
  );
}

export default CartButton;
