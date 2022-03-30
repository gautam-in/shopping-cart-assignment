import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartModal from "../CartModal";
const MainNavigation = () => {
  const [showCart, setShowCart] = useState(false);

  const cartItems = useSelector((state) => state.cart);

  const noOfItems = cartItems.reduce((total, cartItem) => {
    return total + cartItem.count;
  }, 0);

  return (
    <header className={classes["header"]}>
      <div className={classes["logo"]}>
        <img src="/static/images/logo_2x.png" alt="main logo" />
      </div>

      <nav className={classes["nav-link-1"]}>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <div className={classes["nav-link-2"]}>
        <nav className={classes["login-links"]}>
          <Link to="/signin">SignIn</Link>
          <Link to="/register">Register</Link>
        </nav>

        <div
          onClick={() => {
            setShowCart((prevState) => !prevState);
          }}
          className={classes["cart-wrapper"]}
        >
          <div className={classes["cart-link"]} to="/">
            <img
              className={classes["cart-img"]}
              src="/static/images/cart.svg"
              alt="cart icon"
            />
            <p className={classes["cart-items-count"]}>{noOfItems} items</p>
          </div>
        </div>
      </div>
      {showCart && (
        <CartModal noOfItems={noOfItems} onClick={() => setShowCart(false)} />
      )}
    </header>
  );
};

export default MainNavigation;
