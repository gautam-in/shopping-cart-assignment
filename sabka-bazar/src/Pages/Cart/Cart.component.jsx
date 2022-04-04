import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addCartSuccess,
  deleteCartSuccess,
} from "../../Store/Cart/cart.action";
import "./Cart.css";

export default function Cart(props) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const totalPrice = cartItems.reduce((acc, curr) => {
    acc = acc + curr.price * curr.quantity;
    return acc;
  }, 0);

  const navigate = useNavigate();

  const CartHeader = (
    <header>
      <div className="cart-heading">My Cart ({cartItems.length} Items) </div>
      <span className="close" onClick={() => props.showHideCartModal()}>
        &times;
      </span>
    </header>
  );

  const CartFilled = (
    <>
      <div className="cart-body">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-container">
              <div className="cart-item-content">
                <img src={item.imageURL} alt={item.name} />
                <div className="item-desc">
                  <div className="item-name">{item.name}</div>
                  <div className="btn-group">
                    <button
                      className="dec-btn"
                      onClick={() => dispatch(deleteCartSuccess(item))}
                    >
                      -
                    </button>
                    <div className="item-counter">{item.quantity}</div>
                    <button
                      className="inc-btn"
                      onClick={() => dispatch(addCartSuccess(item))}
                    >
                      +
                    </button>
                    <div className="item-price">X&nbsp; Rs.{item.price}</div>
                  </div>
                </div>
                <div className="total-price">
                  Rs.{item.price * item.quantity}
                </div>
              </div>
            </div>
          ))}
          <div className="low-price-banner">
            <img
              src="/static/images/lowest-price.png"
              alt="You won't find it cheaper anywhere"
            />
            <p>You won't find it cheaper anywhere</p>
          </div>
        </div>
      </div>
      <footer className="cart-footer">
        <p>Promo code can be applied on payment page</p>
        <button
          className="shopping"
          onClick={() => {
            props.showHideCartModal();
            navigate("/");
          }}
        >
          <div className="checkout-title">Proceed to Checkout</div>
          <div className="cart-total-price">Rs.{totalPrice} &gt;</div>
        </button>
      </footer>
    </>
  );

  const CartEmpty = (
    <>
      <div className="cart-empty">
        <div className="empty-cart-desc">
          <div className="empty-cart-head">
            <strong> No Items in your cart</strong>
          </div>
          <div className="empty-card-info">
            Your favourite items are just a click away
          </div>
        </div>
      </div>
      <footer className="empty-cart-footer">
        <button
          className="shopping"
          onClick={() => {
            props.showHideCartModal();
            navigate("/");
          }}
        >
          Start Shopping &gt;
        </button>
      </footer>
    </>
  );

  return (
    <div className="cart">
      {CartHeader}
      {cartItems.length ? CartFilled : CartEmpty}
    </div>
  );
}
