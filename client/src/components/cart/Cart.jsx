import { useCartState } from "@/src/hooks/useCartContext";
import { useRouter } from "next/router";
import styles from "./Cart.module.scss";
import CartBanner from "./CartBanner";
import CartItem from "./CartItem";

export default function Cart() {
  const router = useRouter();
  const cartState = useCartState();

  const handleCartFooterBtnClick = (e) => {
    const id = e.target.id || e.target.parentNode.id;
    if (id === "continue") router.push("/products");
  };

  const renderCartItems = () => {
    return cartState.totalItems ? (
      <div>
        {Object.values(cartState.items).map((item) => (
          <CartItem item={item} />
        ))}
        <CartBanner />
      </div>
    ) : (
      <div className={styles.emptyCartContainer}>
        <p>No Items in your cart</p>
        <p>Your favorite items are just</p>
      </div>
    );
  };

  const renderCartBtn = () => {
    if (cartState.totalItems === 0) {
      return (
        <button id="continue" className={styles.cartContinueBtn}>
          <span>Start Shopping</span>
        </button>
      );
    }

    return (
      <>
        <span className={styles.promoText}>Promo code can be applied on payment page</span>
        <button id="checkout" className={styles.cartCheckoutBtn}>
          <span>Proceed to Checkout</span>
          <span>
            <span>Rs.{cartState.totalCartPrice}</span>
            <i className={styles.arrow} />
          </span>
        </button>
      </>
    );
  };

  const cartTitleText = `My Cart (${cartState.totalItems} ${
    cartState.totalItems <= 1 ? "item" : "items"
  })`;

  return (
    <div className={styles.container}>
      <div
        className={
          cartState.totalItems === 0 ? styles.emptyCartTitle : styles.cartTitle
        }
      >
        <h3>{cartState.totalItems === 0 ? "My Cart" : cartTitleText}</h3>
      </div>
      {renderCartItems()}
      <div className={styles.cartFooter} onClick={handleCartFooterBtnClick}>
        {renderCartBtn()}
      </div>
    </div>
  );
}
