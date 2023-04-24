import { lazy } from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = lazy(() => import("../../Components/Common/Header/Header"));
const CartItem = lazy(() => import("../../Components/Cart/CartItem"));

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const totalPrice = cartProducts.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.details.price,
    0
  );
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="pageSection">
        <section className={styles.titleSection}>
          <h2 className={styles.title}>My Cart</h2>
          <div>({cartProducts.length} items)</div>
        </section>
        {cartProducts.map((cartProduct) => {
          return <CartItem key={cartProduct.id} cartProduct={cartProduct} />;
        })}
        {cartProducts.length > 0 && (
          <section className={styles.cartLowestPriceSection}>
            <img
              className={styles.lowestPriceImg}
              src="/static/images/lowest-price.png"
              alt="lowest price offer"
            />
            <span>You won't find it cheaper anywhere</span>
          </section>
        )}
        {cartProducts.length === 0 && (
          <section className={styles.noItems}>
            <h3>No Items in your cart</h3>
            <p>Your favourite items are just a click away</p>
          </section>
        )}
        <section className={styles.cartFooter}>
          {cartProducts.length > 0 && (
            <span className={styles.promoText}>
              Promo code can be applied on payment page
            </span>
          )}
          {cartProducts.length > 0 && (
            <button className={styles.checkoutBtn}>
              <span className={styles.checkoutText}>Proceed to checkout</span>
              <span className={styles.totalPrice}>Rs {totalPrice} &gt;</span>
            </button>
          )}
          {cartProducts.length === 0 && (
            <button
              className={`${styles.checkoutBtn} ${styles.alignCenter}`}
              onClick={() => navigate("/products/all", { replace: true })}
            >
              Start Shopping
            </button>
          )}
        </section>
      </section>
    </>
  );
};

export default Cart;
