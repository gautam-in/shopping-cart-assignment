import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateAuthStatus } from "../../../redux/Auth/AuthActions";
import "./Header.scss";

function Header() {
  const cartData = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(updateAuthStatus(false));
  };

  return (
    <header className="header-main-container" role="header">
      <div className="header-sub-container" role="img" aria-label="Brand Logo">
        <Link to="/">
          <img
            className="header-brand-logo"
            src="/static/images/logo_2X.png"
            alt="logo"
          />
        </Link>
        <div className="header-menu">
          <Link to="/" aria-labelledby="Home Screen">
            Home
          </Link>
          <Link to="/products" aria-labelledby="Product Screen">
            Products
          </Link>
        </div>
        <div className="header-cart">
          <div className="header-auth-links">
            {!auth && (
              <Link to="/login" aria-labelledby="Login Screen">
                Login
              </Link>
            )}
            {auth && (
              <Link to="" onClick={() => logout()}>
                Logout
              </Link>
            )}
            {!auth && (
              <Link to="/signup" aria-labelledby="Register Screen">
                Register
              </Link>
            )}
          </div>
          <Link to="/cart">
            <div className="header-cart-sub-container">
              <img src="/static/images/cart.svg" alt="cart" />
              {Object.keys(cartData).length > 0 && (
                <span> {Object.keys(cartData).length} items</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
