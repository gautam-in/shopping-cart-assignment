import React, { useEffect, useRef, useState } from "react";
import styles from "./Mycart.module.scss";
import Button from "@reusableComponents/Button/Button";
import { useStore } from "@src/customHooks/useContext";
import CartItem from "./components/CartItem/CartItem";

const Mycart: any = (props: any) => {
  const { handleClose } = props;
  const [state, dispatch] = useStore();

  let items = state.myCartItems?.map((v: any) => <CartItem item={v} />);

  return (
    <div className={`${styles.dialogContent}`}>
      <header className={`${styles.cartHeaderContainer}`}>
        <div>
          <span>My Cart&nbsp;</span>
          <span>(&nbsp;{state.myCartItems.length}&nbsp;item&nbsp;)</span>
        </div>
        <div className="cur-pointer" onClick={handleClose}>
          x
        </div>
      </header>
      <section className={`pos-rel ${styles.cartBodyContainer}`}>
        <div>{items}</div>
        <aside className={`wid-100-perc ${styles.cartPaymentCont}`}>
          <p className={`${styles.cartPara}`}>
            Promo code can be applied on Payment page
          </p>
          <Button
            className={`disp-flex jstf-ctnt-sp-btwn align-items-center ${styles.cartBtn}`}
            onClick={handleClose}
          >
            <div>Proceed to Checkout</div>
            <span>RS.187 &#62;</span>
          </Button>
        </aside>
      </section>
    </div>
  );
};

export default Mycart;
