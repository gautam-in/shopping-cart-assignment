import { CartProduct } from "@/store/cartStore";
import React from "react";
import Button from "../Button";

import styles from "./Cart.module.scss";

const CartItem = ({
  id,
  title,
  price,
  quantity,
  updateQuantity,
}: CartProduct & {
  updateQuantity: (productId: string, action: "increase" | "decrease") => void;
}) => {
  return (
    <div className={styles["cart-item"]}>
      <img src="/images/products/fruit-n-veg/apple.jpg" alt="Cart item" />

      <div className={styles["cart-item--content"]}>
        <strong>{title}</strong>

        <div className={styles["cart-item--actions"]}>
          <div className={styles["cart-item--actions--btn"]}>
            <Button
              type="button"
              variant="primary"
              onClick={() => updateQuantity(id, "decrease")}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              type="button"
              variant="primary"
              onClick={() => updateQuantity(id, "increase")}
            >
              +
            </Button>

            <span>X</span>
            <span>Rs.{price}</span>
          </div>

          <div className="cart-item-total text-center">
            <h4>Rs.{price * quantity!}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
