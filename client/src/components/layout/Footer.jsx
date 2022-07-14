import React from "react";
function Footer() {
  return (
    <footer className="d-flex customFooter">
      <p>
        Copyright &copy; 2011-{new Date().getFullYear()} Sabka Bazaar Grocery
        Supplies Pvt Ltd
      </p>
    </footer>
  );
}
export default Footer;
