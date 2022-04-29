import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

import "./index.css";

const MyCart = (props) => {
  const cart = useSelector((state) => state.cartData.cart);

  const { setOpen } = props.actions;
  
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="cart">
      <header>
      <div className="cart-heading">My Cart ({cart.length} Items) </div>
      <span className="close" onClick={handleClose}>
        &times;
      </span>
    </header>
      {cart.length ? <CartItem handleClose ={handleClose} /> : <EmptyCart handleClose ={handleClose} />}
    </div>
  );
};

export default MyCart;
