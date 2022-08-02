import React, { useEffect, useState } from "react";
import "../components/Header.css";
import logo from "./logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import MiniCart from "../pages/MiniCart";
function Header(props) {
  const dispatch = useDispatch();
  const cartTotalQuantity = useSelector(
    (state) => state.cartadddeleteitem.cartTotalQuantity
  );

  const handleModelState = () => {
    dispatch({ type: "CARD_MODAL_STATE", payload: true });
  };

  return (
    <>
      <header className="header">
        <div className="div-1">
          <img src={logo} alt="Ecomerce site logo" className="logo" />
        </div>

        <div className="div-2">
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <a className="main-nav-link " href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="main-nav-link " href="/products">
                  products
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="div-3">
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <a className="main-nav-link " href="/login">
                  SignIn
                </a>
              </li>
              <li>
                <a className="main-nav-link " href="/register">
                  Register
                </a>
              </li>
            </ul>
            <div className="item-container m-t-5" onClick={handleModelState}>
              <AiOutlineShoppingCart className="cart-icon" />
              <span className="label">{cartTotalQuantity} items</span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
