import React, { Fragment } from "react";
import Button from "../button/button";
import "./cart-modal.css";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../store/actions";
import CartProductsList from "../cart-products-list/cart-products-list";
import { Link } from "react-router-dom";
const CartModal = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.length;
  const totalPrice =
    cart.length > 0
      ? cart.length > 1
        ? cart.reduce((a, b) => a.price * a.quantity + b.price * b.quantity)
        : cart[0].price * cart[0].quantity
      : 0;

  const emptyCart = (
    <Fragment>
      <div className="empty-cart">
        <h3>No items in your cart</h3>
        <p>Your favourite items are just a click away</p>
      </div>
      <div className="modal-footer">
        <Link style={{ width: "100%" }} to="/products">
          <Button
            style={{ width: "100%" }}
            onClick={() => dispatch(closeCart())}
            aria-label="Start Shopping"
          >
            Start Shopping
          </Button>
        </Link>
      </div>
    </Fragment>
  );

  return (
    <div
      style={{ backgroundColor: `${cart.length > 0 ? "#eee" : "#ffff"}` }}
      className="cart-modal-box"
    >
      <div className="modal-header">
        <h3 className="modal-title">
          My Cart{" "}
          {cart.length > 0 &&
            (cartItems > 9 ? `(${cartItems} items)` : `(${cartItems} item)`)}
        </h3>
        <button onClick={() => dispatch(closeCart())} className="close-btn">
          &#10006;
        </button>
      </div>
      {cart.length > 0 ? (
        <Fragment>
          <div className="modal-body">
            <CartProductsList />
          </div>
          <div className="modal-footer">
            <p>Promo code can be applied on payment page</p>
            <Button aria-label="Proceed to checkout" className="checkout-btn">
              Proceed to checkout
              <span>
                {`Rs. ${totalPrice}`}
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </Button>
          </div>
        </Fragment>
      ) : (
        emptyCart
      )}
    </div>
  );
};

export default CartModal;
