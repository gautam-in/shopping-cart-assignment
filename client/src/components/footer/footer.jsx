import { memo } from "react";
import "./footer.scss";

const Footer = () => (
  <div className="footer">
    <p className="content">
      Copyright &copy; 2011 - 2022 Sabka Bazaar Grocery Supplies Pvt Ltd.
    </p>
  </div>
);

export default memo(Footer);
