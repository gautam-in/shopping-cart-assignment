import React from "react";
import classes from "./cartItems.module.scss";
import CartItem from "../CartItem";
import CheapestPriceBanner from "../CheapestPriceBanner";

function CartItems({ cartItems, addToCart, removeFromCart }) {
  return cartItems.length > 0 ? (
    <ul className={classes.content}>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          product={cartItem}
          onAdd={() => addToCart(cartItem)}
          onSubtract={() => removeFromCart(cartItem.id)}
        />
      ))}
      <CheapestPriceBanner />
    </ul>
  ) : (
    <div className={`${classes.content} ${classes.noContent}`}>
      <h2>No Items in your cart</h2>
      <small>Your favourite items are just a click away</small>
    </div>
  );
}

export default CartItems;
