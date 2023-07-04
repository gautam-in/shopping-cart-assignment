import React from "react";
import "../../global.scss";
import classes from "./Header.module.scss";
import Logo from "../Logo";
import PrimaryNavigation from "../PrimaryNavigation";
import AuthNavigation from "../AuthNavigation";
import CartButton from "../CartButton";

function Header() {
  return (
    <header className={classes.header}>
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>
      <div id="nav-belt" className={classes.navContainer}>
        <Logo />
        <PrimaryNavigation />
        <div className={classes.secondaryNavContainer}>
          <AuthNavigation />
          <CartButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
