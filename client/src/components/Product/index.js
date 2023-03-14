import React from 'react';
import styles from './product.module.scss';

/**
 * It returns a prodcut details with an image, a description, and a footer with a price and a button
 * @returns A Product component
 */

export const ProductCard = ({
  product: { name, imageURL, description, price },
  onButtonClick,
  disable
}) => {
  return (
    <div className={styles.product_card} tabIndex={0}>
      <h3>{name}</h3>
      <img src={imageURL} alt={name} />
      <p className={styles.description}>{description}</p>
      <div className={styles.card_footer}>
        <p>MRP Rs.{price}</p>
        <button onClick={onButtonClick} disabled={disable} arial-label="Add to Cart">
          Buy Now
        </button>
      </div>
    </div>
  );
};
