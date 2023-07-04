import React from "react";
import classes from "./footer.module.scss";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyrightText}>
        Copyright &copy; 2011-2018 Sabka Baazar Grocery Supplies Pvt. Ltd.
      </p>
    </footer>
  );
}

export default Footer;
