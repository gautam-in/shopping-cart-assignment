import React from "react";

import burgerLogo from "../../../assets/images/logo.png";

import classes from "./Logo.css";

const Logo = props => {

  return (
    <div className={classes.Logo}>
      <a href="/"><img src={burgerLogo} alt="My Burger" /></a>
    </div>
  )
}

export default Logo;
