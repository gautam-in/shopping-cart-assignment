import React, { useEffect, useState } from "react";
import classes from "./MyCart.module.scss";
import cart from "../../assets/images/cart.svg";
import CardContainer from "../CardContainer/CardContainer";
import { Link, useHistory, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
export default function MyCart() {
  const history = useHistory();
  let cartCount = useSelector((state) => state.cartList.cartData);
  const isLogged = useSelector((state) => state.userList.isLoggedIn.isLoggedIn);

  const [cartOpen, setCartOpen] = useState(true);
  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    setCardCount(cartCount.length);
  }, [cartCount]);
  function toggleCart() {
    if (isLogged === true) {
      setCartOpen(!cartOpen);
    } else {
      history.push("/signin");
    }
  }

  return (
    <>
      <div tabIndex="0" className={classes.LogoContainer} onClick={toggleCart}>
        <img src={cart} alt="Cart Logo" /> {cardCount} items
      </div>
      <CardContainer changeCartToggleState={toggleCart} cartState={cartOpen} />
    </>
  );
}
