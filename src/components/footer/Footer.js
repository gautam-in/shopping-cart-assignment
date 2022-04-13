import styles from "./Footer.module.scss";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className={styles["footer"]}>
        <div className={styles["footer-inner"]}>
          <div className={styles["copy-right"]}>
            Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
