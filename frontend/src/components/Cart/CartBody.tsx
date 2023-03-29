import React from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";
import CartFooter from "./CartFooter";
import useCartStore from "@/store/cartStore";
import { EmptyCart } from "./EmptyCart";

const CartBody = () => {
  const { cart, getTotalCartValue, getCartCount, updateQuantity } =
    useCartStore();
  const totalValue = getTotalCartValue();
  const isCartEmpty = getCartCount() === 0;
  return (
    <div className={styles["cart-body"]}>
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <>
          {cart?.map((item) => (
            <CartItem key={item.id} {...item} updateQuantity={updateQuantity} />
          ))}
          <div className={styles["cart-banner"]}>
            <img src="/images/lowest-price.png" alt="cheap price banner" />
            <p>You won&apos;t find it cheaper anywhere</p>
          </div>
        </>
      )}
      <CartFooter isCartEmpty={isCartEmpty} total={totalValue} />
    </div>
  );
};

export default CartBody;
