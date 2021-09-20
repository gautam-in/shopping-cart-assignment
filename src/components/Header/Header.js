import React from "react";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  return (
    <header className="container">
      <nav>
        <div className="nav-logo">
          <img
            className="nav-logo-image"
            src="../static/images/logo.png"
            alt="Sabka Bazaar Logo"
            height="60"
            width="120"
            onClick={() => history.push("/")}
          />
        </div>
        <div className="nav-links">
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listing">Products</Link>
            </li>
          </ul>
        </div>
        <div className="nav-cart">
          <ul className="sign-links">
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <div className="nav-cart-logo">
            <Link to="/cart">
              <span className="icon-cart"></span>
              <span> 0 Item</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
