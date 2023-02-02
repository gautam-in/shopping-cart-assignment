import React from "react";
import styles from "./product.module.scss";

export const ProductCard: React.FC<{
  product: Product;
  onButtonClick?: (e: any) => void;
  disable?: boolean;
}> = ({ product, onButtonClick, disable }) => {
  return (
    <div className={styles.product_card} tabIndex={0}>
      <h3>{product.name}</h3>
      <img src={product.imageURL} alt={product.name} />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.card_footer}>
        <p>MRP Rs.{product.price}</p>
        <button onClick={onButtonClick} disabled={disable}>
          Buy Now
        </button>
      </div>
    </div>
  );
};
