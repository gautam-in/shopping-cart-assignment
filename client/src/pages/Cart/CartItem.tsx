import React from "react";
import classes from "./cart.module.scss";

export const CartItem: React.FC<Product> = ({ ...props }) => {
  return (
    <div className={classes.cart_item} tabIndex={0}>
      <img src={props.imageURL} alt={props.name} width={80} height={80} />
      <div className={classes.details}>
        <h1>{props.name}</h1>
        <div className={classes.button_container}>
          <div>
            <button>-</button>
            <p>1</p>
            <button>+</button>X<p>Rs.{props.price}</p>
          </div>
          <p>Rs.{props.price}</p>
        </div>
      </div>
    </div>
  );
};
