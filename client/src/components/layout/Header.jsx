import Link from "next/link";
import styles from "./Layout.module.scss";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.leftContainer}>
        <img
          srcSet="/static/images/logo.png, /static/images/logo_2x.png 2x"
          src="/static/images/logo.png"
          alt="sabka_bazaar"
        />
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.navLinks}>
          <Link href="/login">SignIn</Link>
          <Link href="/signUp">Register</Link>
        </div>
        <button className={styles.cartButton}>
          <img src="/static/images/cart.svg" alt="cart" />
          <span>0 items</span>
        </button>
      </div>
    </header>
  );
}
