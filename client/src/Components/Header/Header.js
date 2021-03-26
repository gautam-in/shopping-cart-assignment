import React, { Fragment } from "react";
import "./Header.scss";
import logo from "../../../public/static/images/logo.png";
import CartIcon from "../CartIcon/CartIcon";
import routes from "../../routes/routes";
import { HomeLink, ProductsLink } from "../../Constants/ConstantText";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt={"Sabka Bazaar Logo"} height="60" width="140" className="logo" />
      <Link to={routes.home}>{HomeLink}</Link>
      <Link to={routes.products}>{ProductsLink}</Link>
      <CartIcon />
    </header>
  );
};

export default Header;
