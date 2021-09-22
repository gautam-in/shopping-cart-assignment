import React from "react";
import CartButton from "../CartButton/CartButton";
import "./CartCard.scss";

export default function CartCard({ data }) {
  const { id, image, name, price, quantity } = data;
  const totalPrice = price * quantity;
  return (
    <div className="cart-card">
      <div className="cart-image">
        <img src={image} alt={name} height="120" />
      </div>
      <div className="cart-card-button">
        <CartButton id={id} price={price} quan={quantity} />
      </div>
      <div className="total-cart-price">
        <p>Rs.{totalPrice}</p>
      </div>
    </div>
  );
}
