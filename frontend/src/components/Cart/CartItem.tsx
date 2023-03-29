import React from "react";
import Button from "../Button";

import styles from "./Cart.module.scss";

const CartItem = () => {
  return (
    <div className={styles["cart-item"]}>
      <img src="/images/products/fruit-n-veg/apple.jpg" alt="Cart item" />

      <div className={styles["cart-item--content"]}>
        <strong>Apple</strong>

        <div className={styles["cart-item--actions"]}>
          <div className={styles["cart-item--actions--btn"]}>
            <Button type="button" variant="primary">
              -
            </Button>
            <span>{1}</span>
            <Button type="button" variant="primary">
              +
            </Button>

            <span>X</span>
            <span>Rs.187</span>
          </div>

          <div className="cart-item-total text-center">
            <h4>Rs.187</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
