import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import HeaderLogo from "../common/headerLogo";

import CartModal from "../cartModal";

import { LocalStorage, pubsub } from "../../utils";
import topic from "../../constant/topic";
import useDevice from "../../utils/customHooks/useDevices";

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
  const { isDesktop } = useDevice();
  const history = useHistory();
  const cartItems = LocalStorage.getItem("cartItems") || [];
  const [noOfItemInCart, setNoOfItemInCart] = useState(cartItems.length);
  const [showModal, setShowModal] = useState(false);

  const listenCartCount = (msg, data) => {
    setNoOfItemInCart(data);
  };
  useEffect(() => {
    pubsub.subscribe(topic.ADD_TO_CART, listenCartCount);
    pubsub.subscribe(topic.OPEN_CART_OVERLAY, handleCartModal);
  });

  const handleCloseCart = () => {
    isDesktop && setShowModal(false);
  };

  const handleCartModal = () => {
    !isDesktop && setShowModal(true);
  };

  const handleCartClick = () => {
    if (!isDesktop) {
      history.push("/cart");
    } else {
      pubsub.publish(topic.OPEN_CART_OVERLAY, true);
    }
  };
  return (
    <>
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
            </div>
            <div className="nav_secondary">
              <a href="#" onClick={handleCartClick}>
                <div className="cart_logo_container">
                  <img className="cart_logo" src={cartIcon} alt="cart-logo" />
                  <span>{`${noOfItemInCart} ${itemLabel}`}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
      {showModal && isDesktop && (
        <CartModal showModal={showModal} handleClose={handleCloseCart} />
      )}
    </>
  );
};

export default Header;
