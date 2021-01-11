import React from "react";

import classes from "./Layout.css";

import Toolbar from "./Navigations/Toolbar";
import Footer from "./Footer";

const Layout = props => {
  const { children = null } = props;

  return (
    <>
      <Toolbar />
        <main className={classes.Content}>
          {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
