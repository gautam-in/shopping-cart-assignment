import React from "react";

import baseHelper from "../../helper";

import classes from "./Logo.css";

const Logo = props => {

  const logoPath = baseHelper.getImagePath("/static/images/logo.png");

  return (
    <div className={classes.Logo}>
      <a href="/"><img src={logoPath} alt="Sabka Bazaar" /></a>
    </div>
  )
}

export default Logo;
