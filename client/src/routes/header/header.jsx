import React, { Fragment } from "react";
import Logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import "./header.css";
import Cart from "../../components/cart/cart";

const Header = () => {
  return (
    <Fragment>
      <header className="header-wrapper">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} alt="sabka bazar logo" className="logo" />
            </Link>
          </div>
          <nav className="main-nav">
            <div className="left-nav">
              <ul className="left-nav-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
            <div className="right-nav">
              <ul className="right-nav-list">
                <li>
                  <Link to="/sign-in"> Sign in</Link>
                </li>
                <li>
                  <Link to="/sign-up">Register</Link>
                </li>
              </ul>
              <Cart />
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
