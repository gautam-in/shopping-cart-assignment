import React from "react";
import { useSelector } from "react-redux";

import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  let cartItems = useSelector((state) => state.cartSlice.cartItems);

  return (
    <div className="header-container">
      <header className="header">
        <NavLink to="/Home">
          <img className="logo" src="logo.png" alt="Sabka Bazar" />
        </NavLink>
        <nav className="nav">
          <NavLink activeClassName="activelink" to="/Home">
            Home
          </NavLink>
          <NavLink activeClassName="activelink" to="/Products">
            Products
          </NavLink>
        </nav>

        <NavLink to="/Cart" className="cart-header">
          <img src="cart.svg" alt="cart svg" />
          <h4> {cartItems.length} items </h4>
        </NavLink>

        <div className="log-reg">
          <NavLink activeClassName="activelink" to="/Login">
            Login
          </NavLink>
          <NavLink activeClassName="activelink" to="/Signup" className="test">
            Register
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
