import React from "react";
import { ReactComponent as Close } from "../../../assets/xmark-solid.svg";
import "./cart-header.style.scss";
const CartHeader = () => {
  return (
    <div className="cart-header">
      <h3>MyCart(1 items)</h3>
      <Close className="close-icon" />
    </div>
  );
};

export default CartHeader;
