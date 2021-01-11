import React from "react";

import { Logo } from "../../../Library/components";
import NavigationItems from "../NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import classes from "./Toolbar.css";

const Toolbar = props => {
  const { drawerToggleClicked } = props;

  return (
    <header className={classes.Toolbar}>
      {/* <DrawerToggle clicked={drawerToggleClicked} /> */}
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
