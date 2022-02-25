import React from "react";
import { Link } from "react-router-dom";
import CartNav from "../Cart-Nav/CartNav";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="NavContainer">
      <nav className="container-width" role="navigation" aria-label="primary">
        <ul className="left-section">
          <li>
            <Link to="/">
              <img alt="Logo Sabka Bazar" src="/static/images/logo.png" />
            </Link>
          </li>
          {window.screen.width > 767 && (
            <>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
            </>
          )}
        </ul>

        <div className="rightSection">
          <ul>
            <li>
              <Link to="/login">SignIn</Link>
            </li>
            <li>
              <Link to="/sign-up">Register</Link>
            </li>
          </ul>
          <CartNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
