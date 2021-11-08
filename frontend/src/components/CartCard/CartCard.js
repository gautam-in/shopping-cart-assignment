import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../features/products/cartSlice";
import "./CartCard.scss";

export default function CartCard({ item }) {
  const dispatch = useDispatch();

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  };

  const decreaseCartHandler = (item) => {
    dispatch(decreaseCart(item));
  };

  const increaseCartHandler = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={`http://127.0.0.1:5000/${item.imageURL}`} alt="" />
      </div>
      <div className="cart-item-description">
        <div className="item-name">
          <h2>{item.name}</h2>
        </div>
        <div className="item-bar">
          <div className="button-item">
            <i
              className="fas fa-minus-circle"
              onClick={() => decreaseCartHandler(item)}
            ></i>
          </div>
          <p>{item.cartQuantity}</p>
          <div className="button-item">
            <i
              className="fas fa-plus-circle"
              onClick={() => increaseCartHandler(item)}
            ></i>
          </div>
          <div className="button-item">
            <i
              className="fas fa-times"
              onClick={() => removeFromCartHandler(item)}
            ></i>
          </div>
          <p>Rs {item.price}</p>
        </div>
      </div>
      <div className="item-total">
        <h3>Rs {item.cartQuantity * item.price}</h3>
      </div>
    </div>
  );
}
