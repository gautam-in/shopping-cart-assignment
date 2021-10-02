import React from "react";
import Counter from "../Product/Counter";

export default function CartSection({ product }) {
  const totalPrice = product?.quantity * product?.price;

  return (
    <section className="cart-section">
      <img src={product?.imageUrl}
        alt={ product?.name}
        className="cart-section-image"
      />
      <h2 className="cart-section-title">{product?.name}</h2>
      <Counter
        id={product?.id}
        quantity={product?.quantity}
        price={product?.price}
        stock={product?.stock}
      />
      <p className="cart-section-totalprice">Rs.{totalPrice}</p>
    </section>
  );
}
