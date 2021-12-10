import React from "react";
import { connect } from "react-redux";
import { toggleCart } from "redux/modules/cart";

import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import "./CartCount.scss";

function CartCount({ toggleCart, isLoggedIn, itemCount }) {
  if (!isLoggedIn) return null;
  return (
    <>
      <div
        className="CartCount"
        onClick={() => {
          toggleCart();
        }}
      >
        <CartIcon />
        <p>{itemCount} items</p>
      </div>
    </>
  );
}

export default connect(
  ({ user: { isLoggedIn }, cart: { itemCount } }) => ({
    isLoggedIn,
    itemCount,
  }),
  {
    toggleCart,
  }
)(CartCount);
