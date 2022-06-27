import React from "react";
import "../Footer/Footer.scss";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div className="footer-container">
      Copyright © 2011-{Year} Sabka Bazaar Grocery Supplies Pvt. Ltd.
    </div>
  );
};

export default Footer;
