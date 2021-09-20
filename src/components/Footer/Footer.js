import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <footer>
        Copyright &copy; 2011-{new Date().getFullYear()} Sabka Bazaar Grocery
        Supplies Pvt. Ltd.
      </footer>
    </>
  );
}
