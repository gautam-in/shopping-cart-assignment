import React, { lazy, useEffect } from "react";
import styles from "./Cart.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import CartTile from "../../components/tiles/cartTile/CartTile";

const Header = lazy(() => import("../../components/header/Header"));
const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.products);
    let totalPrice = 0;
  return (
    <>
    <Header />
    <section className="pageSection">
      <section className={styles.titleSection}>
        <h2 className={styles.title}>My Cart</h2><span>{cartProducts.length} items</span>
      </section>
        {cartProducts.map((cartProduct) => {
            totalPrice += cartProduct.quantity * cartProduct.details.price;
            return <CartTile cartProduct={cartProduct}/>
        })}
      <section className={styles.cartLowestPriceSection}>
        <img className={styles.lowestPriceImg} src="/static/images/lowest-price.png" />
        <span>You won't find it cheaper anywhere</span>
      </section>
      <section className={styles.cartFooter} >
        <span className={styles.promoText}>Promo code can be applied on payment page</span>
        <button className={styles.checkoutBtn} ><span className={styles.checkoutText}>Proceed to checkout</span><span className={styles.totalPrice}>{totalPrice} {'>'}</span></button>
      </section>
    </section>
    </>
  );
};

export default Cart;