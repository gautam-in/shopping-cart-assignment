import { useCartState } from "@/src/hooks/useCartContext";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Layout.module.scss";

export default function Header() {
  const router = useRouter();
  const cartState = useCartState();

  const handleCartClick = () => {
    router.push("/cart");
  }

  const cartText = `${cartState.totalItems} ${cartState.totalItems > 1 ? "items" : "item"}`;

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
        <button className={styles.cartButton} onClick={handleCartClick}>
          <img src="/static/images/cart.svg" alt="cart" />
          <span>{cartText}</span>
        </button>
      </div>
    </header>
  );
}
