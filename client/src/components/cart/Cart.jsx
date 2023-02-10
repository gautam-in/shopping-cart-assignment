import { useCartState } from "@/src/hooks/useCartContext";
import { useRouter } from "next/router";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

export default function Cart() {
  const router = useRouter();
  const cartState = useCartState();

  const handleCartFooterBtnClick = (e) => {
    const id = e.target.id || e.target.parentNode.id;
    if (id === "continue") router.push("/products");
  };

  const renderCartItems = () => {
    return cartState.totalItems
      ? Object.values(cartState.items).map((item) => <CartItem item={item} />)
      : null;
  };

  const renderCartBtn = () => {
    if (cartState.totalItems === 0) {
      return (
        <button id="continue" className={styles.cartContinueBtn}>
          <span>Continue Shopping</span>
        </button>
      );
    }

    return (
      <button id="checkout" className={styles.cartCheckoutBtn}>
        <span>Proceed to Checkout</span>
        <span>
          <span>Rs.{cartState.totalCartPrice}</span>
          <i className={styles.arrow} />
        </span>
      </button>
    );
  };

  const cartTitleText = `My Cart (${cartState.totalItems} ${
    cartState.totalItems <= 1 ? "item" : "items"
  })`;

  return (
    <div className={styles.container}>
      <div className={styles.cartTitle}>
        <h3>{cartTitleText}</h3>
      </div>
      <div className={styles.cartItems}>{renderCartItems()}</div>
      <div className={styles.cartFooter} onClick={handleCartFooterBtnClick}>
        {renderCartBtn()}
      </div>
    </div>
  );
}
