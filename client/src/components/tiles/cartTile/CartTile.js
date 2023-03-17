import React, { lazy, useEffect } from "react";
import styles from "./CartTile.module.scss";
import { useDispatch } from 'react-redux';
import { decrement, increment, add } from '../../../redux/CartSlice';

const CartTile = ({cartProduct}) => {
    const dispatch = useDispatch();
  return ( 
    <section className={styles.cartItem}>
        <div className={styles.productDetails}>
            <img className={styles.productImage} src={cartProduct.details.imageURL}/>
            <div className={styles.productTiitleBox}>
                <h2>{cartProduct.details.name}</h2>
                <div className={styles.productQuantityBox}>
                    <button className={styles.quantityButton} onClick={() => dispatch(decrement({id:cartProduct.id, details:cartProduct}))}>-</button>
                    <span>{cartProduct.quantity}</span>
                    <button className={styles.quantityButton} onClick={() => dispatch(increment({id:cartProduct.id, details:cartProduct}))}>+</button>
                    <spen className={styles.productPrice}>Rs {cartProduct.details.price}</spen>
                </div>
            </div>
        </div>
        <div className={styles.netPrice}>
            <spen className={styles.productPrice}>Rs {cartProduct.details.price * cartProduct.quantity}</spen>
        </div>
      </section>
  )
}
export default CartTile;