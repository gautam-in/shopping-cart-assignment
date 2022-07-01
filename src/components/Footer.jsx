import React from "react";

function Footer(_props) {
  return (
    <footer data-testid="footer">
      <div className="container-md mx-auto">
        <div className="copyright">
          Copyright &copy; 2011-{new Date().getFullYear()} Sabka Bazaar Grocery
          Supplies Pvt Ltd
        </div>
      </div>
    </footer>
  );
}

export default Footer;
