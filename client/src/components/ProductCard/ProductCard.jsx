import React, { useState } from "react";
import classes from "./ProductCard.module.scss";
import { addToCart } from "../../Redux/cartReducer";
import { useDispatch } from "react-redux";

export default function ProductCard({
  id,
  name,
  imageURL,
  description,
  price,
  stock,
  category,
}) {
  let count = 0;
  const dispatch = useDispatch();

  const handleAddingToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        imageURL,
        price,
        stock,
        category,
        count: count + 1,
      })
    );
  };

  return (
    <div className={classes.Container}>
      <header className={classes.Header}>
        <h3>{name}</h3>
      </header>
      <div className={classes.SecondaryContainer}>
        <img src={imageURL} alt={name} />
        <div className={classes.MobileFlexContainer}>
          <p className={classes.Description}>{description}</p>
          <div className={classes.MainButtonContainer}>
            <p className={classes.Mrp}>MRP {price}</p>
            <button
              onClick={handleAddingToCart}
              type="button"
              className={classes.AddToCartButton}
            >
              Buy Now
            </button>
            <button type="button" className={classes.AddToCartMobileButton}>
              Buy now @Rs.{price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
