import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Cart from "../../components/Cart";
import "./header.scss";

export default function Header() {
  const [openCart, setOpenCart] = useState(false);
  const { item } = useSelector((state) => state);
  const history = useHistory();

  return (
    <header>
      <div className="navigation" role="navigation">
        <div
          onClick={() => {
            history.push("/");
          }}
        >
          <img className="logo-img" src="static/images/logo.png" alt="logo" />
        </div>
        <nav>
          <ul className="list-n">
            <li>
              <button
                onClick={() => {
                  history.push("/");
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  history.push("/products");
                }}
              >
                Products
              </button>
            </li>
          </ul>
        </nav>
        <div className="cart-login-container">
          <nav>
            <ul className="list-h">
              <li className="link">
                <button
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  SignIn
                </button>
              </li>
              <li className="link">
                <button
                  onClick={() => {
                    history.push("/register");
                  }}
                >
                  Register
                </button>
              </li>
            </ul>
          </nav>
          <button
            className="btn-cart"
            onClick={() => {
              setOpenCart(true);
            }}
          >
            <img
              src="static/images/cart.svg"
              alt="cart icon"
              className="icon"
              id="outside"
            />
            <span className="text" id="cart-items">
              {item} Items
            </span>
          </button>
          <div
            id="desktop-cart"
            className="cart-main-cont"
            style={{ display: openCart ? "block" : "none" }}
          >
            <Cart closeCart={setOpenCart} />
          </div>
        </div>
      </div>
    </header>
  );
}
