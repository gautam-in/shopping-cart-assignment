import React, { Fragment } from "react";
import "./Header.scss";
import logo from "../../../public/static/images/logo.png";
import CartIcon from "../CartIcon/CartIcon";

const Header = () => {
  return (
    <header>
      <img src={logo} alt={"Sabka Bazaar Logo"} height="60" width="140" className="logo" />
      <CartIcon />
    </header>
  );
};

export default Header;
