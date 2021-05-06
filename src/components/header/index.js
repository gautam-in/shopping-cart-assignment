import React from "react";
import { Link } from "react-router-dom";

import HeaderLogo from "../common/headerLogo";

import "./index.scss";

import cartIcon from "../../../static/images/cart.svg";
import LocalStorage from "../common/local-storage";

const Header = () => {
  const cartItem = LocalStorage.getItem("cartItems") || [];
  return (
    <header className="header">
      <div className="container-fluid">
        <HeaderLogo />
        <div className="nav_container">
          <div className="nav_primary">
            <Link to="login-your-account">Login</Link>
            <Link to="create-your-account">SignUp</Link>
          </div>
          <div className="nav_secondary">
            <Link to="/cart">
              <div className="cart_logo_container">
                <img className="cart_logo" src={cartIcon} />
                <span>{`${cartItem.length} items`}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
