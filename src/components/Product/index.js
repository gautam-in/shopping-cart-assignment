import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";

import ButtonPrimary from "../UI/ButtonPrimary";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/addToCart";

const Product = ({ productData }) => {
  const [matches, setMatches] = useState(false);

  const dispatch = useDispatch();

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

  const addToCartHandler = () => {
    dispatch(addToCart(productData.id));
  };

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
          <ButtonPrimary onClick={addToCartHandler}>Buy Now</ButtonPrimary>
        </div>
      ) : (
        <div className={classes["price-container"]}>
          <ButtonPrimary onClick={addToCartHandler}>
            Buy Now @ Rs. {productData.price}
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default Product;
