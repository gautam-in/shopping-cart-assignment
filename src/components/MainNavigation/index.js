import React from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
const MainNavigation = () => {
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
          <Link to="/Register">Register</Link>
        </nav>

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
    </header>
  );
};

export default MainNavigation;
