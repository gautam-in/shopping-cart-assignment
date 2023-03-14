import React from 'react';
import styles from './category.module.scss';

/**
 * It takes in a category object and an index number, and returns a div with a class name that depends
 * on the index number, and a nested div with an image and a nested div with a heading, a paragraph,
 * and a button
 * @returns A div with a class of card or card_reverse depending on the index of the category.
 */
export const CategoryCard = ({ category, index }) => {
  const { name, description, imageUrl, key } = category;
  return (
    <div className={index % 2 === 0 ? styles.card : styles.card_reverse}>
      <div className={styles.image_container}>
        <img src={imageUrl} alt={description} />
      </div>
      <div className={styles.category_details}>
        <h2>{name}</h2>
        <p>{description}</p>
        <button>Explore {key}</button>
      </div>
    </div>
  );
};
