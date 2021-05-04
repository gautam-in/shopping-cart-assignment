import React from "react";

function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container text-center">
        Copyright &copy; 2011-{new Date().getFullYear()} Sabka Bazaar Grocery
        Supplies Pvt Ltd
      </div>
    </footer>
  );
}

export default Footer;
