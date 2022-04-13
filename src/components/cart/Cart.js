import styles from "./Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faClose,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../reusable_components/Button";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartReducer";

const Cart = () => {
  const { cartItems, cartTotalAmount, cartTotalItemsCount } = useSelector(
    (state) => state.cart
  );
  const cartDispatch = useDispatch();

  const overlayCloseHandler = () => {
    cartDispatch(cartActions.setCartOpen(false));
  };

  const navigate = useNavigate();

  const cartButtonHandler = () => {
    if (cartItems.length === 0) {
      navigate("/products");
      cartDispatch(cartActions.setCartOpen(false));
    }
  };

  const addItemHandler = (item) => {
    cartDispatch(cartActions.addItem(item));
  };

  const removeItemHandler = (item) => {
    cartDispatch(cartActions.removeItem(item));
  };

  const cartItem = cartItems.map((item) => {
    return (
      <div className={styles["cart-item"]} key={item.id}>
        <img src={item.imageURL} className={styles["item-image"]} alt={item.name} />
        <div className={styles["cart-item-detail"]}>
          <div className={styles["item-name"]}>{item.name}</div>
          <div className={styles["price-details"]}>
            <FontAwesomeIcon
              icon={faMinusCircle}
              className={styles.minus}
              onClick={removeItemHandler.bind(null, item)}
            ></FontAwesomeIcon>
            <span className={styles.quantity}>{item.quantity}</span>
            <FontAwesomeIcon
              icon={faPlusCircle}
              className={styles.plus}
              onClick={addItemHandler.bind(null, item)}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faClose}
              className={styles.multiply}
            ></FontAwesomeIcon>
            <span className={styles.price}>{`Rs.${item.price}`}</span>
          </div>
        </div>
        <div className={styles["cart-item-total"]}>{`Rs.${
          item.quantity * item.price
        }`}</div>
      </div>
    );
  });
  return (
    <div className={styles["cart-container"]}>
      <div className={styles["cart-header"]}>
        <div className={styles["cart-title"]}>
          My Cart{" "}
          <span className={styles.item}>
            {cartItems.length > 0 ? `(${cartTotalItemsCount} item)` : ""}
          </span>
        </div>
        <span className={styles["close-button"]} onClick={overlayCloseHandler}>
          &times;
        </span>
      </div>
      <div className={styles["cart-main"]}>
        {cartItems.length === 0 && (
          <div className={styles["empty-cart"]}>
            <div>No items in your cart</div>
            <div>Your favourite items are just a click away</div>
          </div>
        )}
        {cartItem}
        {cartItems.length > 0 && (
          <div className={styles["cheap-tag"]}>
            <img src="/static/images/lowest-price.png" alt="lowest price"/>
            <div className={styles["cheap-label-copy"]}>
              You won't find it cheaper anywhere
            </div>
          </div>
        )}
      </div>
      <div className={styles["cart-footer"]}>
        {cartItems.length > 0 && (
          <div className={styles["promo-description"]}>
            Promo code can be applied on the payment page
          </div>
        )}
        <Button
          addClassName={styles["checkout-button"]}
          onClick={cartButtonHandler}
        >
          {cartItems.length > 0 ? (
            <Fragment>
              <span>Proceed to Checkout</span>
              <span>
                <span
                  className={styles["total-amount"]}
                >{`Rs.${cartTotalAmount}`}</span>
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={styles["checkout-arrow"]}
                  ></FontAwesomeIcon>
                </span>
              </span>
            </Fragment>
          ) : (
            <div className={styles["empty-button"]}>Start Shopping</div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Cart;
