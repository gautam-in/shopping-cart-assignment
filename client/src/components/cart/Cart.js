import React from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import styles from "./Cart.module.scss";

const Cart = ({ onClose }) => {

  const state = useSelector((state) => state.cart.cartItems);
  return (
    <Modal>
      <div className={styles.cartHeader}>
        <h4>{`My Cart(${state.length} item)`}</h4>
        <span onClick={onClose}>X</span>
      </div>
      <div className={styles.itemsContainer}>
        {state.map((item) => (
          <div key={item.id} className={styles.itemContainer}>
            <img src={item.imageURL} alt={item.name} />
            <div className={styles.itemDiscription}>
              <h6>{item.name}</h6>
              <div className={styles.priceRow}>
                <div className={styles.priceRowLeft}>
                  <button
                    // onClick={() => Shop.removeCartItem(item)}
                    aria-label="Remove item"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    // onClick={() => Shop.updateCartItems(item)}
                    aria-label="Add item"
                  >
                    +
                  </button>
                  <span>x</span>
                  <span aria-label="Base price of item">{`Rs.${item.price}`}</span>
                </div>
                <span aria-label="Total price">{`Rs.${
                  item.price * item.quantity
                }`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.discountContainer}>
        <img src="static/images/lowest-price.png" alt="lowest price banner" />
        <p>You won&lsquo;t find it cheaper anywhere</p>
      </div>
      <footer className={styles.cartFooter}>
        <p>Promo codes can be applied on payment page</p>
        <button>Proceed to Checkout</button>
      </footer>
    </Modal>
  );
};

export default Cart;
