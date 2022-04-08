import React from "react";
import "./cart-item.styles.css";
import { useDispatch } from "react-redux";
import { decerementItem, incrementItem } from "../../store/actions";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageURL, price, quantity, id, stock } = product;
  const incrementHandler = (id) => {
    if (quantity === stock) {
      alert("Out of Stock");
      return;
    }
    dispatch(incrementItem(id));
  };
  const decrementHandler = (id) => {
    dispatch(decerementItem(id));
  };
  return (
    <div className="cart-item-container">
      <img className="item-img" src={imageURL} alt={name} />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{name}</h3>
        <div className="cart-item-actions">
          <button onClick={() => decrementHandler(id)} className="action-btn">
            <ion-icon name="remove"></ion-icon>
          </button>
          <span>{quantity}</span>
          <button onClick={() => incrementHandler(id)} className="action-btn">
            <ion-icon name="add"></ion-icon>
          </button>

          <span style={{ fontSize: "2.6rem" }}> &times;</span>
          <span> Rs {price}</span>
          <span className="item-total">RS {quantity * price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
