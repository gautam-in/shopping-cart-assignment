import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/CartSlice";
import styles from "./CartItem.module.scss";

const CartItem = ({ cartProduct }) => {
  const dispatch = useDispatch();
  return (
    <section className={styles.cartItem}>
      <div className={styles.productDetails}>
        <img
          className={styles.productImage}
          src={cartProduct.details.imageURL}
          alt="Product item"
        />
        <div className={styles.productTiitleBox}>
          <h2>{cartProduct.details.name}</h2>
          <div className={styles.productQuantityBox}>
            <button
              className={styles.quantityButton}
              onClick={() =>
                dispatch(
                  decrement({ id: cartProduct.id, details: cartProduct })
                )
              }
            >
              &minus;
            </button>
            <span>{cartProduct.quantity}</span>
            <button
              className={styles.quantityButton}
              onClick={() =>
                dispatch(
                  increment({ id: cartProduct.id, details: cartProduct })
                )
              }
            >
              +
            </button>
            <span>&times;</span>
            <span className={styles.productPrice}>
              Rs {cartProduct.details.price}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.netPrice}>
        <span className={styles.productPrice}>
          Rs {cartProduct.details.price * cartProduct.quantity}
        </span>
      </div>
    </section>
  );
};
export default CartItem;
