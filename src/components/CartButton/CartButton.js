import React, { useEffect, useState } from "react";
import "./CartButton.scss";
import { useDispatch } from "react-redux";
import {
  addCartItemCount,
  deleteCartItemCount,
} from "../../redux/cart/cartAction";

export default function CartButton({ id, price, quan }) {
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addCartItemCount(id));
  };
  const removeHandler = () => {
    dispatch(deleteCartItemCount(id));
  };
  return (
    <div className="cart-price">
      <div className="cart-button">
        <button className="cart-add-button" onClick={removeHandler}>
          <span>-</span>
        </button>
        <span className="cart-button-text">{quan}</span>
        <button className="cart-add-button" onClick={addHandler}>
          <span>+</span>
        </button>
      </div>
      <div className="divider"> X </div>
      <div className="cart-price-item"> Rs.{price}</div>
    </div>
  );
}
