import React from "react";
import { useSelector } from "react-redux";
import "./CartButton.scss";
/* import { cart } from "/client/static/index"; */

import cart from "/static/images/cart.svg";

function CartButton({ handleOpen }) {
  const itemsCount = useSelector((state) => state.addItems.itemsCount);
  return (
    <div>
      <button className="cart_button" onClick={handleOpen}>
        <img src={cart} alt="Cart" className="cart_img" />
        <span>{itemsCount} items</span>
      </button>
    </div>
  );
}

export default CartButton;
