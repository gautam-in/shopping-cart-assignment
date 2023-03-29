import styles from "./Cart.module.scss";

export const EmptyCart = () => (
  <div className={styles["empty-cart"]}>
    <h4>No items in your cart</h4>
    <p>Your favourite items are just a click away</p>
  </div>
);
