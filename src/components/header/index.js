import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import HeaderLogo from "../common/headerLogo";
import { Context } from "../../store";
import CartModal from "../cartModal";

import { useDevice } from "../../utils";
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
  const [state, dispatch] = useContext(Context);
  const { isDesktop } = useDevice();
  const history = useHistory();

  const handleCloseCart = () => {
    isDesktop &&
      dispatch({
        type: topic.CLOSE_CART_OVERLAY,
        payload: { showPopup: false },
      });
  };

  const handleCartModal = () => {
    isDesktop &&
      dispatch({
        type: topic.OPEN_CART_OVERLAY,
        payload: { showPopup: true },
      });
  };

  const handleCartClick = () => {
    if (!isDesktop) {
      history.push("/cart");
    } else {
      handleCartModal();
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
              <span onClick={handleCartClick}>
                <div className="cart_logo_container">
                  <img className="cart_logo" src={cartIcon} alt="cart-logo" />
                  <span>{`${state.itemCount} ${itemLabel}`}</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </header>
      {state.showPopup && isDesktop && (
        <CartModal showModal={state.showPopup} handleClose={handleCloseCart} />
      )}
    </>
  );
};

export default Header;
