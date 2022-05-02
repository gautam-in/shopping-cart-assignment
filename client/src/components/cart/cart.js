import React from "react";
import "./cart.styles.css";
import { ReactComponent as CartIconSVG } from "../../assets/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.length);

  return (
    <button onClick={() => dispatch(toggleCart())} className="cart-btn">
      <CartIconSVG className="cart-icon" />
      <span className="cart-count">
        {cartItems > 9 ? `${cartItems} items` : `${cartItems} item`}
      </span>
    </button>
  );
};

export default Cart;
