import React from "react";
import styles from "./DropDown.module.scss";

const DropDown = ({ categories }) => {
  return (
      <select name="categories" className={styles.dropDwnCategory}>
        {categories.map((category) => {
          return <option>{category.name}</option>;
        })}
      </select>
  );
};

export default DropDown;
