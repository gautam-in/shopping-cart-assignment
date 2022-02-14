import React from "react";
import { ShoppingIcon } from "./cart-icon.style";
import "./cart-icon.style.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0 items</span>
  </div>
);

export default CartIcon;
