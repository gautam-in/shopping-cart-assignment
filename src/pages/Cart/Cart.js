import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import "./Cart.scss";

export default function Cart() {
  const cartData = useSelector((state) => state.cart.item);
  let totalPrice = 0;
  cartData.map((e) => (totalPrice += e.quantity * e.price));

  const startShoppingHandler = () => {
    window.history.back();
  };

  const checkoutClickHandler = () => {};
  return (
    <div className="cart">
      {cartData && cartData.length ? (
        <section className="cart-product">
          <div className="cart-item-height">
            <div className="cart-header">
              <p className="cart-header-text">
                My Cart - ({cartData.length} Item)
              </p>
            </div>
            {cartData.map((el, index) => (
              <CartCard key={index} data={el} />
            ))}
            <div className="cheap">
              <img
                className="cheap-image"
                src="../static/images/lowest-price.png"
                alt="Lowest Price Gauranteed"
              />
              <p>You wont find it cheaper anywhere!</p>
            </div>
          </div>
          <div className="checkout">
            <p className="promo">Promo code can be applied on payment page</p>
            <button className="button-checkout" onClick={checkoutClickHandler}>
              <span>Proceed to checkout</span>
              <span className="total-price">Rs.{totalPrice}</span>
              {">"}
            </button>
          </div>
        </section>
      ) : (
        <div className="no-item">
          <div className="no-item-text">
            <h2 className="remove-margin">No Items in your cart</h2>
            <h5>
              Your favourite items are just a click away.
            </h5>
          </div>

          <button
            className="button-start-shopping"
            onClick={startShoppingHandler}
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
}
