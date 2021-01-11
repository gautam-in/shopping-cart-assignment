import React from "react";

import NavigationItem from "./NavigationItem";

import classes from "./NavigationItems.css";

const NavigationItems = props => {

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>SignIn</NavigationItem>
      <NavigationItem link="/register">Register</NavigationItem>
    </ul>
  )
}

export default NavigationItems;
