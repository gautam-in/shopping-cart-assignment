import React from "react";
import style from "./Navigation.module.css";
import { withRouter } from "react-router";

const CartIcon = ({ setShowModal, showModal, itemCount, history }) => {
  return (
    <>
      <span
        className={style.cartContainerBigScreen}
        onClick={() => setShowModal(!showModal)}
      >
        <img
          src={"/static/images/cart.svg"}
          alt="cart"
          className={style.cart}
        />
        <span className={style.itemCount}>{`${itemCount} Items`}</span>
      </span>

      <span
        className={style.cartContainerSmallScreen}
        onClick={() => history.push("/checkout")}
      >
        <img
          src={"/static/images/cart.svg"}
          alt="cart"
          className={style.cart}
        />
        <span className={style.itemCount}>{`${itemCount} Items`}</span>
      </span>
    </>
  );
};

export default withRouter(CartIcon);
