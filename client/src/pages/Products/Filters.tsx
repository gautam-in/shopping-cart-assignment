import { useMarket } from "context";
import React from "react";
import styles from "./product.module.scss";

export const Filters: React.FC<{ categories: Category[] }> = ({
  categories,
}) => {
  const { selectedCategory, setSelectedCategory } = useMarket();

  return (
    <ul className={styles.filter_list}>
      {categories
        .filter((item: Category) => item.key !== "seafood")
        .map((item) => {
          return (
            <li
              className={selectedCategory === item.id ? styles.active : ""}
              key={item.id}
              tabIndex={0}
              onClick={() => setSelectedCategory(item.id)}
            >
              {item.name}
            </li>
          );
        })}
    </ul>
  );
};
