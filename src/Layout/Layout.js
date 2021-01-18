import React, { useState } from "react";

import SideDrawer from "./Navigations/SideDrawer";
import Toolbar from "./Navigations/Toolbar";
import Footer from "./Footer";

import classes from "./Layout.css";

const Layout = props => {
  const { children = null } = props;
  const [showSideDrawer, setSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawer(prevState => !prevState);
  };

  return (
    <div className={classes.Layout}>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
