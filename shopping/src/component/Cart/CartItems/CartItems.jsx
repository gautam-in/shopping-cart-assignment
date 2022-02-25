import React, { useState, useEffect, useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { cartContext } from "../../../Context/CartContext";

import "./cartItems.css";

function CartItems(props) {
  const contextData = useContext(cartContext);

  return (
    <>
      {contextData.cartItems.length > 0 ? (
        contextData.cartItems.map((item) => {
          console.log(item);
          return <CartItem product={item} key={item.id} />;
        })
      ) : (
        <div class="cart-empty">
          <h3>No Items in your cart</h3>
          <p> Your favourite items are just a click away</p>
        </div>
      )}
    </>
  );
}

export default CartItems;
