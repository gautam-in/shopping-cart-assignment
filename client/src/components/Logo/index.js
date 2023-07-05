import React from "react";
import classes from "./logo.module.scss";

function Logo() {
  return (
    <a href="/" alt="Home Page">
      <img
        className={classes.logo}
        id="nav-logo"
        src={"/static/images/logo.png"}
        srcSet="/static/images/logo.png 1x, /static/images/logo_2x.png 2x"
        alt="Sabka Bazaar"
      />
    </a>
  );
}

export default Logo;
