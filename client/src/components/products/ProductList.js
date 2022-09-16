import React from "react";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }) => {
  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <div className={styles.productSection} key={product.id}>
          <h6 className={styles.productHheading}>{product.name}</h6>
          <div className={styles.productDetails} aria-label={product.name}>
            <div className={styles.productImg}>
              <img src={product.imageURL} alt={product.name} />
            </div>
            <div className={styles.productDetailsPara}>
              <p role="article">{product.description}</p>
              <div className={styles.bottomSection}>
                <span
                  aria-label={`MRP Rs.${product.price}`}
                >{`MRP Rs.${product.price}`}</span>
                <button
                  className={styles.productBtn1}
                  aria-label="Buy Now"
                  // onClick={() => handleBuy(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <button
            className={styles.prdoctBtn2}
            aria-label={`Buy Now ${product.name} @ RS.${product.price}`}
            // onClick={() => handleBuy(product)}
          >{`Buy Now @ RS.${product.price}`}</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
