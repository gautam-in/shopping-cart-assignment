import React from "react";
import { LABEL } from "../../constants/constant";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className={"FooterContainer"} data-test="component-footer">
      {LABEL.COPYRIGHT}
    </footer>
  );
}
