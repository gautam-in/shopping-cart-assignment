import React from "react";
import CartModal from "./CartModal";

const Cart = ({ show, handleClose, cartItems, products, totalCartPrice }) => {
  return (
    <CartModal
      show={show}
      handleClose={handleClose}
      cartItems={cartItems}
      products={products}
      totalCartPrice={totalCartPrice}
    />
  );
};

export default Cart;
