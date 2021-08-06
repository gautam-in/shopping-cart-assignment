import React, { useContext, useState } from "react";
import CartModal from "./CartModal";
import { Context as CartContext } from "../../context/CartContext";


function Cart() {
  const [showModal, setShowModal] = useState(false);
  const { state } = useContext(CartContext);
  
  return (
    <>
      <div
        className="cart-container"
        tabIndex="0"
        onClick={() => setShowModal((prevState) => !prevState)}
      >
        <img className="cart-image" src="/images/cart.svg" alt="Cart" />
        {state.items.length} items
      </div>
      <CartModal
        show={showModal}
        handleClose={() => setShowModal((prevState) => !prevState)}
      />
    </>
  );
}

export default Cart;
