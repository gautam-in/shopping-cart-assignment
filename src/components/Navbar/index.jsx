import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

import { FaShoppingCart, FaStream } from "react-icons/fa";

class Navbar extends Component {
  render() {
    const { items, showCart } = this.props;

    return (
      <nav className="navigation-bar">
        <div className="navbar-branding">
          <img src={logo} alt="Sabka Bazar Logo" />
        </div>
        <ul className="navlinks">
          <span className="hamburger">
            <FaStream />
          </span>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>
        <div className="cart">
          <button onClick={showCart}>
            <span className="cart-icon">
              <FaShoppingCart />
            </span>{" "}
            {items} item{items === 1 ? "" : "s"}
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
