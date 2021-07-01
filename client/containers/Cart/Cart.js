import React from "react";
import "./Cart.scss";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const handleStart = () => {
    history.push("/products");
  };
  return (
    <div className="cart">
      <div className="cart-empty">
        <div>
          <h2>No items in your cart</h2>
          <p>Your favourite items are just a click away</p>
        </div>
      </div>
      <div className="buttons">
        <button
          type="button"
          onClick={handleStart}
          onKeyPress={handleStart}
          tabIndex={0}
        >
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
