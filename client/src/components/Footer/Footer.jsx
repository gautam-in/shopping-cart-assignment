import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer__text}>
        Copyright © 2011-2018 Sabka Baazar Gorcery Supplies Pvt. Ltd.
      </p>
    </footer>
  );
};

export default Footer;
