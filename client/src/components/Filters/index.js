import React from 'react';
import { useShopContext } from '../../store';
import styles from './filters.module.scss';

/**
 * It renders a list of categories, and when a category is clicked, it sets the selected category in
 * the shop context
 * @returns A list of categories that are not seafood.
 */
export const Filters = ({ categories }) => {
  const { selectedCategory, setSelectedCategory } = useShopContext();

  return (
    <ul className={styles.filterList}>
      {categories
        .filter((item) => item.key !== 'seafood')
        .map((item) => {
          return (
            <li
              className={selectedCategory === item.id ? styles.active : ''}
              key={item.id}
              tabIndex={0}
              onClick={() => setSelectedCategory(item.id)}>
              {item.name}
            </li>
          );
        })}
    </ul>
  );
};
