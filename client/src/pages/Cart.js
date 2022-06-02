import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { CartActions } from "../store/cart-slice";

import Cartproduct from "../components/Cartproduct";
import Notification from "../components/Notification";

import "./cart.css";

function Cart() {
  let myCart = useSelector((state) => state.cartSlice.cartItems);
  let totalCartPrice = useSelector((state) => state.cartSlice.totalCartPrice);
  let dispatch = useDispatch();

  let sum = myCart.reduce((sum, item) => sum + item.totalPrice, 0);

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

  let emptyCart = () => {
    fetch("http://localhost:5000/userCart/", {
      method: "DELETE",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())

      .then((json) => dispatch(CartActions.replaceCart([])));
  };

  return (
    <section className="cart-container">
      <div className="header-cart">
        <h3>My Cart</h3>
        <p>({myCart.length} items)</p>
      </div>

      {cartProducts.length > 0 ? (
        cartProducts
      ) : (
        <div>
          <h2>No items in your cart</h2>{" "}
          <p>You favourite items are just a click away</p>
        </div>
      )}

      <div className="checkout-contents">
        <div className="promo-message">
          Promo code can be applied at payment page.
        </div>
        <div className="checkout-buttons">
          <button disabled={myCart.length === 0} onClick={() => emptyCart()}>
            <span>Proceed to Checkout</span>
            <span className="totalCartPrice">
              {totalCartPrice || sum} &nbsp; &nbsp; &gt;
            </span>
          </button>
        </div>
      </div>

      <div className="lowprice-tag">
        <img src="./lowest-price.png" alt="lowest price tag"></img>
        <p>You won't find it cheaper anywhere</p>
      </div>
      <Notification></Notification>
    </section>
  );
}

export default Cart;
