import React from "react";

import "./cart.css";

function Cart() {
  return (
    <section className="cart-container">
      <div className="header-cart">
        <h3>My Cart</h3>
        <p>(0 items)</p>
      </div>

      <div className="cart-contents">
        <img src="./apple.jpg"></img>
        <div className="cart-product-details">
          <h3>Apple</h3>
          <div className="cart-count-buttons">
            <button> + </button>
            <p>2</p>
            <button> - </button>
            <p>X 187</p>
          </div>
        </div>
        <p className="total-price">Rs. 187</p>
      </div>

      <div className="lowprice-tag">
        <img src="./lowest-price.png"></img>
        <p>You won't find it cheaper anywhere</p>
      </div>
    </section>
  );
}

export default Cart;
