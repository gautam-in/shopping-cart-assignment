import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.scss";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="header-container">
      <div className="image-container">
        <img className="image-logo" src="/static/images/logo.png" alt="logo" />
      </div>
      <div className="header-right-container">
        <div className="signin-rigester-container">
          <Link className="singin-link link" to="/signin">
            SignIn
          </Link>
          <Link className="signup-link link" to="/signup">
            Register
          </Link>
        </div>
        <div className="links-cart-container">
          <div className="link-container">
            <Link className="link" to={"/"}>
              Home
            </Link>
            <Link className="link" to={"/products"}>
              Products
            </Link>
          </div>
          <div className="products-cart-container">
            <div className="cart">
              <MdShoppingCart className="cart-icon" />0 Items
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
