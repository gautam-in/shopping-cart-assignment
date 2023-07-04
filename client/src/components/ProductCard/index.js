import React from "react";
import classes from "./productCard.module.scss";
import Button from "../Button";
import { useCart } from "../../context/cart";

function ProductCard({ product }) {
  const { name, imageURL, description, price } = product;
  const { addToCart } = useCart();
  return (
    <div className={classes.product}>
      <h2 className={classes.name}>{name}</h2>
      <div className={classes.details}>
        <div className={classes.imgContainer}>
          <img
            className={classes.image}
            src={imageURL}
            alt={description}
            loading="lazy"
          />
          <p>{description}</p>
        </div>
        <div className={classes.price}>
          <span>MRP Rs.{price}</span>
          <Button
            aria-label={`${name} - Buy Now`}
            onClick={() => {
              addToCart(product);
            }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
