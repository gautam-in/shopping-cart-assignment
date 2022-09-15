import React from "react";
import styles from "./Categories.module.scss";

const Categories = ({ categories }) => {
  const sortedCategories = categories.sort((a, b) => a.order - b.order);

  return (
    <div className={styles.categoryContainer}>
      {sortedCategories.map((category, index) => {
        const imageSection = (
          <div className={styles.imageSection}>
            <img src={category.imageUrl} alt={category.name} />
          </div>
        );

        const dataSection = (
          <div className={styles.dataSection}>
            <h2>{category.name}</h2>
            <p className={styles.categoryDescription}>{category.description}</p>
            <button aria-hidden="true">Explore {category.key}</button>
          </div>
        );

        return (
          <>
            {category.enabled === true && (
              <div key={category.id} className={styles.categoryItems}>
                {index % 2 === 0 ? dataSection : imageSection}
                {index % 2 === 0 ? imageSection : dataSection}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Categories;
