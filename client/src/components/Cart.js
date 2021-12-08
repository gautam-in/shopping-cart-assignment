import React, { useState, useEffect, useCallback } from "react";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../css/Cart.css";
import CartItem from "./CartItem";
import LowestPrice from "../static/images/lowest-price.png";
import { useNavigate } from "react-router-dom";

function Cart({
  setCartOpen,
  cartItems,
  itemCount,
  increaseCountHandler,
  decreaseCountHandler,
}) {
  const navigate = useNavigate();

  const cartCloseHandler = () => {
    document.body.style.overflow = "auto";
    setCartOpen(false);
  };

  const getCartHeaderLabel = useCallback(() => {
    if (itemCount) {
      return (
        <h5>
          My Cart <span>({itemCount} item)</span>
        </h5>
      );
    }
    return <h5>My Cart</h5>;
  }, [itemCount]);

  return (
    <div className="cart_container">
      <div className="cart">
        <div className="cart_header">
          {getCartHeaderLabel()}
          <IconButton color="info" onClick={cartCloseHandler}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="cart_body">
          {itemCount ? (
            <div className="cart_body_products">
              {cartItems.map((item, i) => (
                <CartItem
                  item={item}
                  increaseCountHandler={increaseCountHandler}
                  decreaseCountHandler={decreaseCountHandler}
                />
              ))}
              <div className="lowest_price_container">
                <img src={LowestPrice} />
                <small>You won't find any cheaper price anywhere</small>
              </div>
            </div>
          ) : (
            <div className="no_items_container">
              <h3>No items in your cart</h3>
              <small>Your favorite items are just a click away</small>
            </div>
          )}
        </div>
        <div className="cart_footer">
          {itemCount ? (
            <React.Fragment>
              <small>Promocode can be applied on payment page</small>
              <button color="error" varient="outlined">
                Proceed to Checkout
              </button>
            </React.Fragment>
          ) : (
            <button
              onClick={() => {
                cartCloseHandler();
                navigate("/");
              }}
            >
              Start Shopping
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
