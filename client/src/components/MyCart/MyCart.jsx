import React from "react";
import classes from "./MyCart.module.scss";
import cart from "../../assets/images/cart.svg";
export default function MyCart() {
  return (
    <div tabIndex="0" className={classes.LogoContainer}>
      <img src={cart} alt="Cart Logo" /> 0 items
    </div>
  );
}
