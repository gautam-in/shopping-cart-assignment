import React from "react";
import styles from "./AppFooter.module.scss";
const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles["footer"]}>
      <p>{`Copyright © 2011-${currentYear} Sabka Baazar Gorcery Supplies Pvt. Ltd.`}</p>
    </footer>
  );
};

export default AppFooter;
