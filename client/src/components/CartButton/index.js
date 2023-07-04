import React from "react";
import classes from "./cartButton.module.scss";
import { useCart } from "../../context/cart";

function CartButton() {
  const { cartItems, setIsCartOpen } = useCart();
  return (
    <button
      className={classes.cartButton}
      onClick={() => setIsCartOpen((open) => !open)}
    >
      <img
        loading="lazy"
        aria-hidden={"true"}
        src="/static/images/cart.svg"
        width={30}
        height={30}
        alt=""
      />
      <span>
        {cartItems.length} item{cartItems.length === 1 ? "" : "s"}
      </span>
    </button>
  );
}

export default CartButton;
