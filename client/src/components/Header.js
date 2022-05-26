import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoginActions } from "../store/login-slice";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  let dispatch = useDispatch();

  let cartItems = useSelector((state) => state.cartSlice.cartItems);
  let isLoggedin = useSelector((state) => state.loginSlice.isLoggedin);

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

        {isLoggedin && (
          <NavLink to="/Cart" className="cart-header">
            <img src="cart.svg" alt="cart svg" />
            <h4> {cartItems.length} items </h4>
          </NavLink>
        )}

        <div className="log-reg">
          <NavLink
            activeClassName="activelink"
            to="/Login"
            onClick={() => {
              dispatch(LoginActions.setisLoginStatus(false));
            }}
          >
            {isLoggedin ? "Logout" : "login"}
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
