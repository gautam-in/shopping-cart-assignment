import React from "react";
import styles from "./CategoryList.module.scss";

const CategoryList = ({ categories, handleProducts, showFilterProducts, selectedCategory }) => {
  const sortList = categories
    .sort((a, b) => a.order - b.order)
    .filter((item) => item.name !== "Seafood");

  return (
    <div className={styles.catListContainer}>
      {sortList.map((category) => {
        return (
          <p
            className={selectedCategory === category.id && showFilterProducts ? styles.activeItem : styles.catItem}
            key={category.id}
            role="button"
            aria-label={category.name}
            tabIndex="0"
            onClick={() => handleProducts(category.id)}
          >
            {category.name}
          </p>
        );
      })}
    </div>
  );
};

export default CategoryList;
