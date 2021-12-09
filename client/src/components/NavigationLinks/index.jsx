import React from "react";
import links from "./links";
import { NavLink } from "react-router-dom";

import "./NavigationLinks.scss";

export default function NavigationLinks() {
  return links.map((link) => (
    <NavLink to={link.to} className="NavigationLinks">
      {link.name}
    </NavLink>
  ));
}
