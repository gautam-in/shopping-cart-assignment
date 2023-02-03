import React from "react";
import styles from "./category.module.scss";

export const CategoryCard: React.FC<{
  category: Category;
  index: number;
}> = ({ category, index }) => {
  return (
    <div className={index % 2 === 0 ? styles.card : styles.card_reverse}>
      <div className={styles.image_container}>
        <img src={category.imageUrl} alt={category.description} />
      </div>
      <div className={styles.category_details}>
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        <button>Explore {category.key}</button>
      </div>
    </div>
  );
};
