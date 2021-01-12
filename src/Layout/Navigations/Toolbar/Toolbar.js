import React from "react";

import baseHelper from "../../../Library/helper";
import { Logo } from "../../../Library/components";
import NavigationItems from "../NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import classes from "./Toolbar.module.scss";

const Toolbar = props => {
  const { drawerToggleClicked } = props;

  const cartLogoPath = baseHelper.getImagePath("/static/images/cart.svg");

  return (
    <header className={classes.Toolbar}>
      {/* <DrawerToggle clicked={drawerToggleClicked} /> */}
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div style={{width: "40px", borderRadius: "5px", padding: "5px", backgroundColor: "#e0e4e7", position: "relative"}}>
        <img src={cartLogoPath} alt="cart Logo" style={{width: "100%", height: "auto", float: "right"}} />
        <div style={{
          position: "absolute",
          borderRadius: "5px",
          right: "10px",
          top: "0px",
          color: "white",
          zIndex: "99",
          backgroundColor: "#f50057",
          padding: "1px",
        }}>
          2
        </div>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
