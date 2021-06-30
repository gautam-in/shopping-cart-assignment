import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-empty">
        <div>
          <h2>No items in your cart</h2>
          <p>Your favourite items are just a click away</p>
        </div>
      </div>
      <div className="buttons">
        <button>
          <Link to="/Products">Start Shopping</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
