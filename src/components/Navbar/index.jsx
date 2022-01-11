import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

import { FaShoppingCart, FaStream } from "react-icons/fa";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      items: [],
    };
  }

  render() {
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
          <button>
            <span className="cart-icon">
              <FaShoppingCart />
            </span>{" "}
            {this.state.items.length} items
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
