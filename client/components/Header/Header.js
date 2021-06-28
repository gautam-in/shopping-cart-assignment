import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand-name">Sabka Bazaar</div>
        <div className="left-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <ul>
            <li>
              <Link to="/login">SignIn</Link>
            </li>
            <li>
              <Link to="/sign-up">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
