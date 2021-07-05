import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthContext from "../../AuthContext";

const Header = () => {
  const { userAuthentication, toggleUserAuthentication } = useContext(
    AuthContext
  );
  const cartItemsCount = useSelector(
    (state) =>
      state.cart && state.cart.itemsAdded && state.cart.itemsAdded.length
  );
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand-name">
          <img
            className="brand-logo"
            src="../static/images/logo.png"
            alt="Sabka Bazaar Logo"
            height="60"
            width="100"
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
                  sessionStorage.setItem("status", "");
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
          <div className="my-cart">
            <Link to="/cart">
              <img
                className="cart-icon"
                src="../static/images/cart.svg"
                alt="cart image"
                height="27"
                width="30"
              />
              <span
                style={
                  cartItemsCount > 0 ? { color: "#ea1d71" } : { color: "gray" }
                }
              >
                {cartItemsCount} {cartItemsCount === 1 ? "item" : "items"}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
