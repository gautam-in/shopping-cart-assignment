import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

import { FaShoppingCart } from "react-icons/fa";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <nav className="navigation-bar">
        <div className="navbar-branding">
          <img src={logo} alt="Brand logo" />
        </div>
        <ul className="navlinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
        <div className="cart">
          <button>
            <FaShoppingCart />
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
