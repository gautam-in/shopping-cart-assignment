import React from "react";

import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        Copyright &copy; 2011-{new Date().getFullYear()} Sabka Bazaar Grocery
        Supplies Pvt Ltd
      </div>
    </footer>
  );
};

export default Footer;
