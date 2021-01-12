import React from "react";

import { Logo, Backdrop } from "../../../Library/components";
import NavigationItems from "../NavigationItems";

import classes from "./SideDrawer.css";

const SideDrawer = props => {
  const { closed, open } = props;

  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
