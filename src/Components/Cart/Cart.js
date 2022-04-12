import React,{useState} from "react";
import Button from "../../Shared/Button";
import "./Cart.scss";

function Cart() {
    const [cart,setCart]=useState([])
  return (
    <div className="cart-container">
      <div className="cart-heading">
        <h1>
          My Cart <span>( 0 items)</span>
        </h1>
      </div>
      <div className="cart-items">
      Items of cart
      </div>
      <div className="no-item-text">
        Your favourite items are just a click away
      </div>
      <div className="checkout">
        <p className="checkout-heading" style={{ fontSize: "small" }}>
          Promo code can be applied on the checkout page.
        </p>
        <Button type="button" name="button">
          <span className="checkout-text">Proceed to checkout</span>
        </Button>
      </div>
    </div>
  );
}

export default Cart;
