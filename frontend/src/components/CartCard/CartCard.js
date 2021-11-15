import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../redux/cartSlice";
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
        <img src={item.imageURL} alt="" />
      </div>
      <div className="cart-item-description">
        <div className="item-name">
          <h2>{item.name}</h2>
        </div>
        <div className="item-bar">
          <div className="button-item">
            <i
              className="fa fa-minus-circle"
              onClick={() => decreaseCartHandler(item)}
            ></i>
          </div>
          <div style={{ margin: "10px" }}>{item.cartQuantity}</div>
          <div className="button-item">
            <i
              className="fa fa-plus-circle"
              onClick={() => increaseCartHandler(item)}
            ></i>
          </div>
          <div className="button-item">
            <i
              className="fa fa-trash-o"
              onClick={() => removeFromCartHandler(item)}
            ></i>
          </div>
          <div style={{ margin: "10px" }}>Rs {item.price}</div>
          <div className="item-total"> <div style={{marginLeft:"10px"}}>Rs {item.cartQuantity * item.price}</div>
          </div>
        </div>
      </div>

    </div>
  );
}