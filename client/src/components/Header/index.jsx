import React from "react";
import Image from "../HtmlElements/Image";
import NavigationLinks from "../NavigationLinks";
import CartCount from "../CartCount";

import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <Image
          alt="Logo"
          src="images/logo.png"
          style={{
            height: "100px",
            width: "100px",
            alignItems: "center",
            margin: "5px",
          }}
        />
      </Link>
      <div className="Header__Navigation-container">
        <NavigationLinks />
      </div>
      <div className="Header__Last-section">
        <div className="Header__SignIn-Register">
          <Link to="/sign-in">Sign In</Link>
          <Link to="/register">Register</Link>
        </div>
        <CartCount />
      </div>
    </div>
  );
}
