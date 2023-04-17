import React from "react";
import styles from  "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer__text"]}>
        Copyright © 2011-2018 Sabka Baazar Gorcery Supplies Pvt. Ltd.
      </p>
    </footer>
  );
}
