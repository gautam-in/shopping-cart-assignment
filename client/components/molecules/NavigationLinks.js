import React from "react";
import { Link } from "react-router-dom";

function NavigationLinks() {
  return (
    <nav>
      <ul>
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
