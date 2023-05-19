import { FunctionComponent } from "react";
import locale from "../../assets/locale.json";

import Section from "../Section";
import "./styles.scss";

const Footer: FunctionComponent = () => {
  const footerLabels = locale.default.application.footer;

  return (
    <footer className="footer">
      <Section>{footerLabels.copyright}</Section>
    </footer>
  );
};

export default Footer;
