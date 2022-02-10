import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "./../../redux/slices/cartSlice";
import "./ShoppingCartCard.css";

function ShoppingCartCard({ item }) {
  const { name, imageURL, cartQuantity, price } = item;
  const dispatch = useDispatch();
  const removeFromCartHandler = (item) => dispatch(removeFromCart(item));
  const decreaseQuantityHandler = (item) => dispatch(decreaseQuantity(item));
  const increaseQuantityHandler = (item) => dispatch(addToCart(item));

  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={imageURL} alt={name} />
      </div>
      <div className="cart-item-description">
        <div className="item-name">
          <h2>{name}</h2>
        </div>
        <div className="item-bar">
          <div className="button-item">
            <i
              className="fas fa-minus-circle"
              onClick={() => decreaseQuantityHandler(item)}
            ></i>
          </div>
          <p>{cartQuantity}</p>
          <div className="button-item">
            <i
              className="fas fa-plus-circle"
              onClick={() => increaseQuantityHandler(item)}
            ></i>
          </div>
          <div className="button-item">
            <i
              className="fas fa-times"
              onClick={() => removeFromCartHandler(item)}
            ></i>
          </div>
          <p>Rs. {price}</p>
        </div>
      </div>
      <div className="item-total">
        <h3>Rs. {cartQuantity * price}</h3>
      </div>
    </div>
  );
}

export default ShoppingCartCard;
