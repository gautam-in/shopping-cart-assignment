import React from "react";
import axios from 'axios'
import styles from "./ProductList.module.scss";

import { useDispatch } from "react-redux";
import { actionType } from "../../store/actions/cartActions";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleBuy = async (product) => {
    let productId = product.id;
    await axios
      .post("http://localhost:5000/addToCart", productId)
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: actionType.ADD_TOCART, payload: product });
        }
      });
  };


  // async function addCart(product) {
  //   let productId = product.id;
    
  // }

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
                  onClick={() => handleBuy(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <button
            className={styles.prdoctBtn2}
            aria-label={`Buy Now ${product.name} @ RS.${product.price}`}
            onClick={() => handleBuy(product)}
          >{`Buy Now @ RS.${product.price}`}</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
