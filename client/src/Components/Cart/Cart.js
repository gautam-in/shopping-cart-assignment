import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../Store/Actions/CartActions";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.CartReducer.cartItems);
  const dispatch = useDispatch()
  return (
    <div className="Cart">
      <div className="cartheading">My Cart</div>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div className="cartItem">
              <img src={item.imageURL} className="productImage" />
              <div className="cartcontainer">
                <p className="productname">{item.name}</p>
                <button className="cartaction" onClick={()=>dispatch(addItem(item))}>+</button>
                {item.quantity}
                <button className="cartaction" onClick={()=>dispatch(removeItem(item))}>-</button> X {item.price}
              </div>
              <div className="productprice">{`Rs.${item.quantity*item.price}`}</div>
            </div>
          ))}
        </>
      ) : (
        <>Cart is empty</>
      )}
    </div>
  );
};

export default Cart;
