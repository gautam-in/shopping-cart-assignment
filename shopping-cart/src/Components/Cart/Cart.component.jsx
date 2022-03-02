import React from "react";
import ReactDOM, { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import CartProduct from "../CartProduct/CartProduct.component.jsx";
import {
  CartContainer,
  CartHeader,
  CartTitle,
  CartClose,
  CartList,
  Slogan,
  Checkout,
  CheckoutBtn,
  BtnText,
  NoItem,
} from "./Cart.styles.js";

const Cart = ({ close }) => {
  const selector = useSelector((state) => state.cartItems);
  let itemsCount = useSelector((state) =>
    state.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );
  const total = useSelector((state) =>
    state.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.item_total;
    }, 0)
  );
  let width = window.innerWidth;
  return ReactDOM.createPortal(
    <CartContainer width={width}>
      <CartHeader>
        <CartTitle>My Cart</CartTitle>
        <small>[{itemsCount} items]</small>
        <CartClose onClick={() => close(false)}>X</CartClose>
      </CartHeader>
      {selector.length >= 1 ? (
        <CartList>
          {selector &&
            selector.map((item) => <CartProduct key={item.id} item={item} />)}
          <Slogan>
            <img
              className="sloganImg"
              src="/static/images/lowest-price.png"
              alt="slogan"
            />
            <div className="sloganTxt">You won't find it cheaper anywhere</div>
          </Slogan>
        </CartList>
      ) : (
        <NoItem>
          <h2>No items in your cart</h2>
          <span>Your favourite items are just a click away</span>
        </NoItem>
      )}

      {selector.length >= 1 ? (
        <Checkout>
          <small>Promo code can be applied on payment page</small>
          <CheckoutBtn>
            <BtnText>Proceed to Checkout</BtnText>
            <BtnText>
              Rs.{total} <span>&#62;</span>
            </BtnText>
          </CheckoutBtn>
        </Checkout>
      ) : (
        <CheckoutBtn className="noitemBtn">Start Shopping</CheckoutBtn>
      )}
    </CartContainer>,
    document.getElementById("portal-root")
  );
};

export default Cart;
