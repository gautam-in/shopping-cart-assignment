import React from "react";
import styles from "./product.module.scss";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.product_card} tabIndex={0}>
      <h3>{product.name}</h3>
      <img loading="lazy" src={product.imageURL} alt={product.name} />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.card_footer}>
        <p>MRP Rs.{product.price}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
