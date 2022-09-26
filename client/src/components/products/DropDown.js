import React from "react";
import styles from "./DropDown.module.scss";

const DropDown = ({ categories, handleProducts }) => {

  const sortList = categories
    .sort((a, b) => a.order - b.order)
    .filter((item) => item.name !== "Seafood");

  return (
      <select name="categories" className={styles.dropDwnCategory}>
        {sortList.map((category, index) => {
          return <option onClick={() => handleProducts(category.id)} key={index}>{category.name}</option>;
        })}
      </select>
  );
};

export default DropDown;
