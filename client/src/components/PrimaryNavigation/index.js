import React from "react";
import classes from "./primaryNavigation.module.scss";
import { NavLink } from "react-router-dom";

function PrimaryNavigation() {
  return (
    <nav className={classes.primaryNav}>
      <ul className={classes.navlist}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNavigation;
