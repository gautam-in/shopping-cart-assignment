import React from "react";
import "./Header.scss";
import { NavLink, withRouter } from "react-router-dom";
import * as Constants from "../../global-constants";
import CartButton from '../../components/Buttons/CartButton';

const navLinks = [
  {
    url: "home",
    name: "Home",
  },
  {
    url: "plp",
    name: "Products",
  },
  {
    url: "login",
    name: "Sign In",
  },
  {
    url: "register",
    name: "Register",
  },
];

function Header(props) {

  const handleMenuItemClick = (menuItem) => {
    props.history.push("/" + menuItem);
  };

  return (
    <header className="header">
      <img
        src="public/static/images/logo.png"
        alt="logo"
        className="header-logo"
      ></img>
      {(props.screenSize === Constants.ScreenLaptop ||
        props.screenSize === Constants.ScreenTablet) && (
        <nav className="header-nav">
          {navLinks.slice(0, 2).map((navlink, index) => (
            <NavLink
              className="header-link"
              activeClassName="header-link--active"
              to={"/" + navlink.url}
              key={index}
              onClick={() => handleMenuItemClick(navlink.url)}
            >
              {navlink.name}
            </NavLink>
          ))}
        </nav>
      )}
      <div className="header-rightpane">
        {(props.screenSize === Constants.ScreenLaptop ||
          props.screenSize === Constants.ScreenTablet) && (
          <nav className="header-nav  header-nav-right">
            {navLinks.slice(2).map((navlink, index) => (
              <NavLink
                className="header-link"
                activeClassName="header-link--active"
                to={"/" + navlink.url}
                key={index}
                onClick={() => handleMenuItemClick(navlink.url)}
              >
                {navlink.name}
              </NavLink>
            ))}
          </nav>
        )}
        <CartButton cartItems={0} handleClick={props.handleClick} />
      </div>
    </header>
  );
}

export default withRouter(Header);
