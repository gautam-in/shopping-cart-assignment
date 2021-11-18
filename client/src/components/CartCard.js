import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../redux";
import "../styles/cartCard.scss";
import { getTotal } from "../redux";


export default function CartCard({ item }) {
  const dispatch = useDispatch();

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
    dispatch(getTotal());
  };

  const decreaseCartHandler = (item) => {
    dispatch(decreaseCart(item));
    dispatch(getTotal());
  };

  const increaseCartHandler = (item) => {
    dispatch(addToCart(item));
    dispatch(getTotal());
  };

  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={`http://127.0.0.1:5500/${item.imageURL}`} alt="" />
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