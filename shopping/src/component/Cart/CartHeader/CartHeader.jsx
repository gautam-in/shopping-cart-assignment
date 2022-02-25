import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../../Context/CartContext";
import "./cartHeader.css";

function CartHeader({ product }) {
  const { open, setOpen, cart: productsCount } = useContext(cartContext);

  return (
    <div className="cart-header-container">
      <h3>
        My Cart{" "}
        {productsCount > 0 ? (
          <span>
            {productsCount}{" "}
            {productsCount > 1 ? <span>items</span> : <span>item</span>}
          </span>
        ) : null}
      </h3>
      <button
        onClick={() => {
          setOpen(false);
        }}
        class="cross-btn"
        title="close modal"
        type="button"
      >
        <svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M12.6666667,11.3333333 L20,11.3333333 L20,12.6666667 L12.6666667,12.6666667 L12.6666667,20 L11.3333333,20 L11.3333333,12.6666667 L4,12.6666667 L4,11.3333333 L11.3333333,11.3333333 L11.3333333,4 L12.6666667,4 L12.6666667,11.3333333 Z"
            transform="rotate(45 13.414 8.586)"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default CartHeader;
