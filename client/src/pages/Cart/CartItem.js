import React from 'react';
import classes from './cart.module.scss';

/**
 * It takes in the item props with the image, name, price, and quantity of
 * the item
 * @returns A functional component that returns a product with an image and and rest details.
 */
export const CartItem = ({ decrease, increase, ...rest }) => {
  return (
    <div className={classes.cartItem} tabIndex={0}>
      <img src={rest.imageURL} alt={rest.name} width={80} height={80} />
      <div className={classes.details}>
        <h1>{rest.name}</h1>
        <div className={classes.btncontainer}>
          <div>
            <button onClick={() => decrease(rest)} aria-label="Decrease quantity">
              -
            </button>
            <p>{rest.count}</p>
            <button onClick={() => increase(rest)} aria-label="Increase quantity">
              +
            </button>
            X<p>Rs.{rest.price}</p>
          </div>
          <p>Rs.{rest.price}</p>
        </div>
      </div>
    </div>
  );
};
