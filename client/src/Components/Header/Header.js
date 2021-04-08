import React from "react";
import "./Header.scss";
import logo from "../../../public/static/images/logo.png";
import CartIcon from "../CartIcon/CartIcon";
import routes from "../../routes/routes";
import { HomeLink, ProductsLink } from "../../Constants/ConstantText";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="navbar-section">
        <img src={logo} alt={"Sabka Bazaar Logo"} height="60" width="140" className="logo" aria-label={"Sabka Bazaar Logo"} />
        <nav>
          <Link to={routes.home} aria-label={"Navigation link for home"}>{HomeLink}</Link>
          <Link to={routes.products} aria-label={"Navigation link for products"}>{ProductsLink}</Link>
        </nav>
      </div>
      <CartIcon />
    </header>
  );
};

export default Header;
