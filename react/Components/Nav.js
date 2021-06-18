import React from 'react';
import '../Styles/nav.css';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <nav className="navbar">
      <div className="left-nav">
        <img
          className="sbkaBazaarLogo"
          src="../static/images/logo.png"
          alt="Sabka Bazaar Logo"
        />

        <ul className="flow-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <div className="login-links">
          <a href="/login">SignIn</a>
          <a href="/register">Register</a>
        </div>
        <div className="cart-icon">
          <img
            className="cart-dimension"
            src="../static/images/cart.svg"
            alt="cart image"
          />
          <span className="number-of-items">0 items</span>
        </div>
      </div>
    </nav>
  );
}
