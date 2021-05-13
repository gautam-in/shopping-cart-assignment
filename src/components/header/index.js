import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeaderLogo from "../common/headerLogo";

import { LocalStorage, pubsub } from "../../utils";
import topic from "../../constant/topic";

import "./index.scss";

import cartIcon from "../../../static/images/cart.svg";

import {
  homeCtaLabel,
  productCtaLabel,
  loginCtaLabel,
  registerCtaLabel,
  itemLabel,
} from "../../constant";

const Header = () => {
  const cartItems = LocalStorage.getItem("cartItems") || [];
  const [noOfItemInCart, setNoOfItemInCart] = useState(cartItems.length);
  const listenCartCount = (msg, data) => {
    // console.log("header", data);
    setNoOfItemInCart(data);
  };
  useEffect(() => {
    pubsub.subscribe(topic.ADD_TO_CART, listenCartCount);
  });
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="logo_container_nav">
          <HeaderLogo />
          <div className="nav_links">
            <Link to="/home">{homeCtaLabel}</Link>
            <Link to="/products">{productCtaLabel}</Link>
          </div>
        </div>
        <div className="nav_container">
          <div className="nav_primary">
            <Link to="/login-your-account">{loginCtaLabel}</Link>
            <Link to="/create-your-account">{registerCtaLabel}</Link>
            {/* <div className="my_account_container">
              <img className="user_logo" src={userIcon} />
              <span>{label.myAccountLabel}</span>
            </div> */}
          </div>
          <div className="nav_secondary">
            <Link to="/cart">
              <div className="cart_logo_container">
                <img className="cart_logo" src={cartIcon} />
                <span>{`${noOfItemInCart} ${itemLabel}`}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
