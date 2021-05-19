import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationLinks.scss";

function NavigationLinks() {
  const [search, setSearch] = useState("");

  return (
    <nav className="nav_links">
      <ul className="flexed">
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
