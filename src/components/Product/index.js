import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";

import ButtonPrimary from "../UI/ButtonPrimary";
const Product = ({ productData }) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 769px)");

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const handler = () => {
      setMatches(media.matches);
    };

    media.addListener(handler);

    return () => media.removeListener(handler);
  }, [matches]);

  return (
    <div className={classes["product"]}>
      <h3>{productData.name}</h3>
      <div className={classes["img-container"]}>
        <img src={productData.imageURL} alt={productData.name} />
      </div>
      <p>{productData.description}</p>
      {matches ? (
        <div className={classes["price-container"]}>
          <p>MRP Rs. {productData.price}</p>
          <ButtonPrimary>Buy Now</ButtonPrimary>
        </div>
      ) : (
        <div className={classes["price-container"]}>
          <ButtonPrimary>Buy Now @ Rs. {productData.price}</ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default Product;
