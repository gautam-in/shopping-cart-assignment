import React, { useContext } from "react";

import { ActiveContext } from "../../../Library/context";
import NavigationItem from "./NavigationItem";

import classes from "./NavigationItems.css";

const navigationItems = [
  { link: "/home", name: "Home" },
  { link: "/product", name: "Product" },
  { link: "/", name: "SignIn" },
  { link: "/register", name: "Register" }
];

const NavigationItems = props => {
  const { match: { path = "" } } = useContext(ActiveContext);

  return (
    <ul className={classes.NavigationItems}>
      {navigationItems.map(navigationItem => (
        <NavigationItem
          link={navigationItem.link}
          key={navigationItem.name}
          active={path === navigationItem.link}
        >
          {navigationItem.name}
        </NavigationItem>
      ))}
    </ul>
  )
}

export default NavigationItems;
