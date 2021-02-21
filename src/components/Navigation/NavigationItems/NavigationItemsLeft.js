import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItemsLeft = (props) => (
  <ul className={classes.NavigationItemsLeft}>
    <NavigationItem link="/home" exact>
      Home
    </NavigationItem>
    <NavigationItem link="/product" exact>
      Products
    </NavigationItem>
  </ul>
);

export default NavigationItemsLeft;
