import React from "react";
import styles from "../categories/Categories.module.scss";

const CopyRights = (props) => {
  return (
    <div tabIndex="0" aria-label=" Copyright" className={props.fixedStyle ? styles.fixedStyles : styles.copyRight}>
      Copyright &#169; 2008-2022 Sabka Bazar Grocery Supplies Pvt. Ltd.
    </div>
  );
};

export default CopyRights;
