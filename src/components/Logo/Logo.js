import React from "react";

// import appLogo from "../../static/images/logo.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={`../../static/images/logo.png`} alt="My App Logo" />
  </div>
);

export default logo;
