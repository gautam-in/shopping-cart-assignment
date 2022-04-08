import React, { Fragment } from "react";
import Button from "../button/button";
import "./cart-table-view.styles.css";
import { useSelector } from "react-redux";
import CartProductsList from "../cart-products-list/cart-products-list";
import EmptyCart from "../empty-cart/empty-cart";
const CartTabletView = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.length;
  const totalPrice =
    cart.length > 0
      ? cart.length > 1
        ? cart.reduce((a, b) => a.price * a.quantity + b.price * b.quantity)
        : cart[0].price * cart[0].quantity
      : 0;

  return (
    <div className="cart-tablet-box">
      <h3 className="cart-tablet-title">
        My Cart{" "}
        {cart.length > 0 &&
          (cartItems > 9 ? `(${cartItems} items)` : `(${cartItems} item)`)}
      </h3>
      {cart.length > 0 ? (
        <Fragment>
          <div className="cart-tablet-body">
            <CartProductsList />
          </div>
          <div className="cart-tablet-footer">
            <p>Promo code can be applied on payment page</p>
            <Button
              aria-label="Proceed to checkout"
              className="checkout-btn-tablet"
            >
              Proceed to checkout
              <span>
                {`Rs. ${totalPrice}`}
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </Button>
          </div>
        </Fragment>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartTabletView;
