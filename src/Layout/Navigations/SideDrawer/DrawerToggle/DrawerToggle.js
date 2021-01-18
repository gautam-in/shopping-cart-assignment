import React from "react";

import classes from "./DrawerToggle.css";

const DrawerToggle = props => {
  const { clicked } = props;

  return (
    <div
      className={classes.DrawerToggle}
      onClick={clicked}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
