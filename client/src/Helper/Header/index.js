import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthContext from "../../Auth.jsx";
import Cart from "../../Component/Cart/index";

import "./index.scss";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { userAuthentication, toggleUserAuthentication } =
    useContext(AuthContext);
  const cartItemsCount = useSelector(
    (state) =>
      state.cart && state.cart.itemsAdded && state.cart.itemsAdded.length
  );

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand-name">
          <img
            className="brand-logo"
            src="/static/images/logo.png"
            alt="Sabka Bazaar Logo"
          />
        </div>
        <div className="left-nav">
          <ul className="tabs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          {userAuthentication === "logged-in" ? (
            <ul className="links">
              <li
                onClick={() => {
                  localStorage.setItem("status", "");
                  toggleUserAuthentication();
                }}
              >
                <a href="#">Logout</a>
              </li>
            </ul>
          ) : (
            <ul className="links">
              <li>
                <Link to="/login">SignIn</Link>
              </li>
              <li>
                <Link to="/sign-up">Register</Link>
              </li>
            </ul>
          )}
          <div className="my-cart" onClick={toggleCart}>
            <Link>
              <img
                className="cart-icon"
                src="/static/images/cart.svg"
                alt="cart image"
              />
              <span className="number-of-items">{cartItemsCount} items</span>
            </Link>
          </div>
          {cartOpen && (
            <div className="cart-box">
              <Cart handleClose={toggleCart} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
