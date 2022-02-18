import React, { useState, useContext } from "react";
import "./cart.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { MyContext } from "../../App";
import { withRouter } from "react-router-dom";
function Cart({ setCartClick, history }) {
  const cart = useContext(MyContext);
  return (
    <div className="cart-dropdown">
      <header class="cart-header">
        <span>{`My Cart (${cart.cartItems.length} items)`}</span>
        <button class="close" onClick={(e) => setCartClick(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </header>
      <div className="cart-items-container">
        {cart.cartItems.length > 0 ? (
          cart.cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <div className="cart-items-footer">
      <p>Promocode can be applied on payment page</p>
      <button
        className="checkout-button"
        onClick={() => {
          history.push("/checkout");
          setCartClick(false);
        }}
      >
        GO TO CHECKOUT
      </button>
      </div>
      
    </div>
  );
}

export default withRouter(Cart);
