import React, { useState } from "react";
import "./Cart.scss";
// import { handlecartupdate } from "../../../Redux/action";
import { connect } from "react-redux";
import ProductCardItems from "../../components/ProductCarts/ProductCartItems";
import EmptyCart from "../../components/ProductCarts/EmptyCart/EmptyCart";
// import NonEmptyCart from "../../UI/molecules/cart/NonEmptyCart";
// import EmptyCart from "../../UI/molecules/cart/EmptyCart";

export function Cart(props) {
  const { setCartDialog, cart } = props;
  const handleCloseCart = () => {
    setCartDialog(false);
  };

  return (
    <main className="cartContainer" data-test="component-cart">
      <section className="cartMain">
        <header>
          <span> My Cart</span>
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
const mapStateToProps = (store) => {
  return {
    cart: store.cartItems,
  };
};

export default connect(mapStateToProps, null)(Cart);
