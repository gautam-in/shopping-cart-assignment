import React from "react";

import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; 2011-{new Date().getFullYear()} Sabka Bazaar Grocery
        Supplies Pvt Ltd
      </p>
    </footer>
  );
};

export default Footer;
