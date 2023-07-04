import React from "react";
import classes from "./cartItem.module.scss";
import Button from "../Button";

function CartItem({ product, onAdd, onSubtract }) {
  const { name, imageURL, description, price, count } = product;
  const totalPrice = price * count;

  return (
    <li className={classes.cartItem}>
      <img
        className={classes.image}
        src={imageURL}
        alt={description}
        loading="lazy"
      />
      <div className={classes.detailsContainer}>
        <div className={classes.details}>
          <h3>{name}</h3>
          <div className={classes.actions}>
            <Button onClick={onSubtract}>-</Button>
            {count}
            <Button onClick={onAdd}>+</Button> <span>x</span>
            <span>Rs {price}</span>
          </div>
        </div>
        <p className={classes.price}>Rs.{totalPrice}</p>
      </div>
    </li>
  );
}

export default CartItem;
