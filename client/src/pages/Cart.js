import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Cartproduct from "../components/Cartproduct";
import Notification from "../components/Notification";

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

      {cartProducts}
      <div className="lowprice-tag">
        <img src="./lowest-price.png"></img>
        <p>You won't find it cheaper anywhere</p>
      </div>
      <Notification></Notification>
    </section>
  );
}

export default Cart;
