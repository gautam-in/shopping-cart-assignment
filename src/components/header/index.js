import React from "react";
import { Link } from "react-router-dom";

import HeaderLogo from "../common/headerLogo";
import LocalStorage from "../common/local-storage";

import "./index.scss";

import userIcon from "../../../static/images/user.svg";
import cartIcon from "../../../static/images/cart.svg";

import label from "./data/index.json";

const Header = () => {
  const cartItem = LocalStorage.getItem("cartItems") || [];
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="logo_container_nav">
          <HeaderLogo />
          <div className="nav_links">
            <Link to="/home">{label.homeCtaLabel}</Link>
            <Link to="/products">{label.productCtaLabel}</Link>
          </div>
        </div>
        <div className="nav_container">
          <div className="nav_primary">
            <Link to="/login-your-account">{label.loginCtaLabel}</Link>
            <Link to="/create-your-account">{label.registerCtaLabel}</Link>
            {/* <div className="my_account_container">
              <img className="user_logo" src={userIcon} />
              <span>{label.myAccountLabel}</span>
            </div> */}
          </div>
          <div className="nav_secondary">
            <Link to="/cart">
              <div className="cart_logo_container">
                <img className="cart_logo" src={cartIcon} />
                <span>{`${cartItem.length} ${label.itemLabel}`}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
