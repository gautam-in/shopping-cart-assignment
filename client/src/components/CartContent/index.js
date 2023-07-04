import React from "react";
import classes from "./cartcontent.module.scss";
import { useCart } from "../../context/cart";

import CartHeader from "../CartHeader";
import CartItems from "../CartItems";
import CartCheckoutButton from "../CartCheckoutButton";

function CartContent({ onClose }) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce(
    (total, current) => total + current.price * current.count,
    0
  );

  const handleCheckout = () => {};
  return (
    <div className={classes.container}>
      <CartHeader onClose={onClose} count={cartItems.length} />
      <CartItems
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      {cartItems.length > 0 ? (
        <CartCheckoutButton price={totalPrice} onCheckout={handleCheckout} />
      ) : null}
    </div>
  );
}

export default CartContent;
