import React from "react";
import "./Footer.scss";
import { CopyrightText } from "../../Constants/ConstantText";

const Footer = () => {
  return (
    <footer>
      <p>{CopyrightText}</p>
    </footer>
  );
};

export default Footer;
