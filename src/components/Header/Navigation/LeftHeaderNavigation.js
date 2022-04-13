import React from "react";
import "./LeftHeaderNavigation.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const LeftHeaderNavigation = () => {
  return (
    <nav className="nav_left">
      <Logo />
      <ul className="nav_left__list">
        <li>
          <Link to="/" className="nav_left__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav_left__link">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftHeaderNavigation;
