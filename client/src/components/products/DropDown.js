import React from "react";
import styles from "./DropDown.module.scss";

const DropDown = ({ categories }) => {
  return (
      <select name="categories" className={styles.dropDwnCategory}>
        {categories.map((category, index) => {
          return <option key={index}>{category.name}</option>;
        })}
      </select>
  );
};

export default DropDown;
