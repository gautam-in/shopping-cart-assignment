import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Cartproduct from "../components/Cartproduct";

import "./cart.css";

function Cart() {
  let myCart = useSelector((state) => state.cartSlice.cartItems);

  let cartProducts = myCart.map((prd) => {
    return (
      <Cartproduct
        productName={prd.productName}
        productPrice={prd.productPrice}
        quantity={prd.quantity}
        totalPrice={prd.totalPrice}
        imageURL={prd.imageURL}
        id={prd.id}
        key={prd.id}
      />
    );
  });

  return (
    <section className="cart-container">
      <div className="header-cart">
        <h3>My Cart</h3>
        <p>({myCart.length} items)</p>
      </div>

      {/* <div className="cart-contents">
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
      </div> */}
      {cartProducts}
      <div className="lowprice-tag">
        <img src="./lowest-price.png"></img>
        <p>You won't find it cheaper anywhere</p>
      </div>
    </section>
  );
}

export default Cart;
