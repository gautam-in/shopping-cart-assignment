import React from "react";
import { useSelector } from "react-redux";

import "./Header.scss";
import Cart from "./Cart";
import "./Cart.scss";

function Header() {
  const [openCart, setOpenCart] = React.useState(false);
  const { item } = useSelector((state) => state);

  return (
    <header>
      <div className="navigation" role="navigation">
        <a href="/index.html" rel="home">
          <img className="logo-img" src="static/images/logo.png" alt="logo" />
        </a>
        <nav>
          <ul className="list-n">
            <li>
              <a href="/" role="link">
                Home
              </a>
            </li>
            <li>
              <a href="/products" role="link">
                Products
              </a>
            </li>
          </ul>
        </nav>
        <div className="cart-login-container">
          <nav>
            <ul className="list-h">
              <li className="link">
                <a href="/login" role="link">
                  SignIn
                </a>
              </li>
              <li className="link">
                <a href="/register" role="link">
                  Register
                </a>
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

export default Header;
