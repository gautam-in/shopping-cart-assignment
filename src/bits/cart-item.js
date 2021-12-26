import React from "react";
import "./styles/cartItem.css";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x Rs.{price}
      </span>
    </div>
  </div>
);

export default CartItem;
