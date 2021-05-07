import React from "react";
import { Link } from "react-router-dom";
import "./NavigationLinks.scss";

function NavigationLinks() {
  return (
    <nav className="nav_links">
      <ul className="flexed_jc_sa">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
