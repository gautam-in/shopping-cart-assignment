import React from "react";

import classes from "./Footer.css";

const Footer = () => {
  const footerText = "Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd";

  return (
    <footer className={classes.Footer}>
      {footerText}
    </footer>
  )
}

export default Footer;
