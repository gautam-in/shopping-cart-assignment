import React from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
const MainNavigation = () => {
  return (
    <div className={classes["main-nav"]}>
      <div className={classes["logo"]}>
        <img src="/static/images/logo_2x.png" alt="main logo" />
      </div>

      <div className={classes["nav-link-1"]}>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
      </div>

      <div className={classes["nav-link-2"]}>
        <div className={classes["login-links"]}>
          <Link to="/signin">SignIn</Link>
          <Link to="/Register">Register</Link>
        </div>

        <div className={classes["cart-wrapper"]}>
          <Link className={classes["cart-link"]} to="/cart">
            <img
              className={classes["cart-img"]}
              src="/static/images/cart.svg"
              alt="cart icon"
            />
            <p className={classes["cart-items-count"]}>x items</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
