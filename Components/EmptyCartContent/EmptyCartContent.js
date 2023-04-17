import React, { useContext } from 'react'
import StoreContext from '../../Store/CommonStore';
import styles from "./EmptyCartContent.module.scss";
export default function EmptyCartContent(props) {
    const ctxVal=useContext(StoreContext);
  return (
    <section className={styles["empty-cart"]}>
        <div className={styles["cartmodal__section__heading"]}>
        <h1 className={styles["cartmodal__section__heading__title"]}>My Cart ({ctxVal.count} item)</h1>
        <button className={styles["cartmodal__section__heading__button"]+ " button-wrapper"} onClick={()=>props.closeCart()}>
          ✕ <span className='sr-only'>{"Close the Cart"}</span>
        </button>
      </div>
      <div className={styles["empty-cart__sub-container"]}>
        <h2 className={styles["empty-cart__sub-container__title"]}>
          No items in your cart
        </h2>
        <p className={styles["empty-cart__sub-container__text"]}>
          Your favourite items are just a click away
        </p>
      </div>
      <footer className={styles["empty-cart__footer"]}>
        <button
          className={`${styles["empty-cart__footer__start-button"]} button-wrapper`}
          onClick={() => props.closeCart()}
        >
          Start Shopping
        </button>
      </footer>
    </section>
  )
}
