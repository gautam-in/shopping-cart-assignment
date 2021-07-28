import React, { useState } from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import ProductCardItems from "../../components/ProductCarts/ProductCartItems";
import EmptyCart from "../../components/ProductCarts/EmptyCart/EmptyCart";
import { LABEL } from "../../constants/constant";

export function Cart(props) {
  const cart = useSelector((state) => state.cartItems);
  const { setCartDialog } = props;
  const handleCloseCart = () => {
    setCartDialog(false);
  };

  return (
    <main className="cartContainer" data-test="component-cart">
      <section className="cartMain">
        <header>
          <span>{LABEL.MY_CART} </span>
          <button className="deleteButton" onClick={handleCloseCart}>
            x
          </button>
        </header>
        {cart.length > 0 ? (
          <ProductCardItems cart={cart} setCartDialog={setCartDialog} />
        ) : (
          <EmptyCart setCartDialog={setCartDialog} />
        )}
      </section>
    </main>
  );
}

export default Cart;
