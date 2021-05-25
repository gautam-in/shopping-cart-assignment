import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationLinks.scss";

function NavigationLinks() {
  const [search, setSearch] = useState("");

  return (
    <nav className="nav_links">
      <ul className="flexed">
        <li>
          <NavLink activeClassName="linkActive" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="linkActive" to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
