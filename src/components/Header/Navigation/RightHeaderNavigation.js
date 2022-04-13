import React from "react";
import "./RightHeaderNavigation.scss";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const RightHeaderNavigation = (props) => {
  return (
    <nav className="nav_right">
      <ul className="nav_right__list">
        <li>
          <Link to="/signin" className="nav_right__link">
            SignIn
          </Link>
        </li>
        <li>
          <Link to="/register" className="nav_right__link">
            Register
          </Link>
        </li>
      </ul>
      <Cart cartItems={props.cartItems} openCartWindow={props.openCartWindow} />
    </nav>
  );
};

export default RightHeaderNavigation;
