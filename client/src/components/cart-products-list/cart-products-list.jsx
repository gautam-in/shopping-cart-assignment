import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item";
import "./cart-producst-list.styles.css";

const CartProductsList = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      {cart.length > 0 && (
        <>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <div className="lowest-price-box">
            <img
              src="static\images\lowest-price.png"
              alt="lowest price guaranteed"
            />
            <p>You won't find it cheaper anywhere</p>
          </div>
        </>
      )}
    </>
  );
};

export default CartProductsList;
