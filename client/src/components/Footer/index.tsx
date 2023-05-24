import { FunctionComponent } from "react";

import Section from "../Section";
import "./styles.scss";

type FooterProps = {
  copyright: string;
};

const Footer: FunctionComponent<FooterProps> = ({ copyright }) => {
  return (
    <footer className="footer">
      <Section className="no-padding">{copyright}</Section>
    </footer>
  );
};

export default Footer;
