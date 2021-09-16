import React, { useState } from "react";
import classes from "./MyCart.module.scss";
import cart from "../../assets/images/cart.svg";
import CardContainer from "../CardContainer/CardContainer";
export default function MyCart() {
  const [cartOpen, setCartOpen] = useState(true);
  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  return (
    <>
      <div tabIndex="0" className={classes.LogoContainer} onClick={toggleCart}>
        <img src={cart} alt="Cart Logo" /> 0 items
      </div>
      <CardContainer changeCartToggleState={toggleCart} cartState={cartOpen} />
    </>
  );
}
