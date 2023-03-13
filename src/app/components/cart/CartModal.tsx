import React, { useState } from "react";
import { useSelector } from "react-redux";

function CartModal() {
  let cartState = useSelector((state: any) => state.cart);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flex flex-col justify-between absolute cart-modal ">
      <div className="cart-modal-heading">
        <h1 className="cart-modal-title">
          My Cart ({cartState.totalItems} items)
        </h1>
        <button className="cartmodal__section__heading__button button-wrapper bg-black">
          X
        </button>
      </div>
      <div className="cartmodal__section__flex cart-tablet">
        <section className="empty-cart">
          <div className="empty-cart__sub-container">
            <h2 className="empty-cart__sub-container__title font-bold pb-4">
              {cartState.cartItems.map((item: any) => {})}
            </h2>
            <p className="empty-cart__sub-container__text text-sm">
              Your favourite items are just a click away
            </p>
          </div>
          <footer className="empty-cart__footer">
            <button className="empty-cart__footer__start-button button-wrapper">
              Start Shopping
            </button>
          </footer>
        </section>
      </div>
    </section>
  );
}

export default CartModal;
