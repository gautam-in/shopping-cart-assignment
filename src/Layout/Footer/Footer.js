import React from "react";

import classes from "./Footer.css";

const Footer = () => {
  const footerText = "Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd";

  return (
    <footer>
      <div className={classes.Footer}>
        {footerText}
      </div>
    </footer>
  )
}

export default Footer;
