import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import styles from "./Cart.module.scss";
import { actionType } from "../../store/actions/cartActions";

const Cart = ({ onClose }) => {
  const navigate = useNavigate();

  const state = useSelector((state) => state.cart.cartItems);

  console.log(state, "statatatata");

  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

  const dispatch = useDispatch();

  const handleShopping = () => {
    navigate("/products");
    onClose();
  };

  return (
    <>
      {state.length > 0 ? (
        <Modal>
          <div className={styles.cartHeader}>
            <h4>{`My Cart(${cartTotalQuantity} item)`}</h4>
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
                        onClick={() =>
                          dispatch({
                            type: actionType.REMOVE_FROM_CART,
                            payload: item,
                          })
                        }
                        aria-label="Remove item"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: actionType.ADD_TOCART,
                            payload: item,
                          })
                        }
                        aria-label="Add item"
                      >
                        +
                      </button>
                      <span>x</span>
                      <span aria-label="Base price of item">{`Rs.${item.price}`}</span>
                    </div>
                    <span aria-label="Total price">{`Rs.${
                      item.price * item.qty
                    }`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.discountContainer}>
            <img
              src="static/images/lowest-price.png"
              alt="lowest price banner"
            />
            <p>You won&lsquo;t find it cheaper anywhere</p>
          </div>
          <footer className={styles.cartFooter}>
            <p>Promo codes can be applied on payment page</p>
            <button  onClick={onClose}>
              Proceed to Checkout
              <span>
                Rs.
                {state.reduce(
                  (total, item) => total + item.price * item.qty,
                  0
                )}
              </span>
            </button>
          </footer>
        </Modal>
      ) : (
        <Modal>
          <div className={styles.cartHeader}>
            <h3>My Cart</h3>
            <span onClick={onClose}>X</span>
          </div>
          <div className={styles.emptyContainer}>
            <h4>No items in your cart</h4>
            <p>Your favourite items are just a click away</p>
          </div>
          <footer className={styles.emptyCartFooter}>
            <button onClick={handleShopping}>Start shopping</button>
          </footer>
        </Modal>
      )}
    </>
  );
};

export default Cart;
