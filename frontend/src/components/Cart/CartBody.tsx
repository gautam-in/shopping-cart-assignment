import React from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";
import CartFooter from "./CartFooter";

const CartBody = () => {
  return (
    <div className={styles["cart-body"]}>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <div className={styles["cart-banner"]}>
        <img src="/images/lowest-price.png" alt="cheap price banner" />
        <p>You won't find it cheaper anywhere</p>
      </div>
      <CartFooter />
    </div>
  );
};

export default CartBody;
