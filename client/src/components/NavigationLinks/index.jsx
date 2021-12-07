import React from "react";
import links from "./links";
import { Link } from "react-router-dom";

import "./NavigationLinks.scss";

export default function NavigationLinks() {
  return links.map((link) => (
    <Link to={link.to} className="NavigationLinks">
      {link.name}
    </Link>
  ));
}
