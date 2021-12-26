import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../redux/actions";
import AButton from "./aButton";
import CartItem from "./cart-item";
import "./styles/cartDropdown.css";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cItem, idx) => <CartItem key={idx} item={cItem} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <AButton
      onClick={() => {
        history.push("checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Proceed to Checkout
    </AButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
