import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItemsLeft from "../NavigationItems/NavigationItemsLeft";
import NavigationItemsRight from "../NavigationItems/NavigationItemsRight";
import Cart from "../../Cart/Cart";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItemsLeft isAuthenticated={props.isAuth} />

      <div className={classes.Cart}>
        <NavigationItemsRight isAuthenticated={props.isAuth} />
        <Cart />
      </div>
    </nav>
  </header>
);

export default toolbar;
