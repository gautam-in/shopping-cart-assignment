import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const cartData = useSelector((state) => state.cart.data);
  const [auth, setAuth] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <header className="header-main-container">
      <div className="header-sub-container">
        <Link to="/">
          <img
            className="header-brand-logo"
            src="/static/images/logo_2X.png"
            alt="logo"
          />
        </Link>
        <div className="header-menu">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="header-cart">
          <div className="header-auth-links">
            {!auth && <Link to="/login">Login</Link>}
            {auth && (
              <Link to="" onClick={() => logout()}>
                Logout
              </Link>
            )}
            {!auth && <Link to="/signup">Register</Link>}
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
