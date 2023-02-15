import { useCartDispatch, useCartState } from "@/src/hooks/useCartContext";
import useMediaQuery from "@/src/hooks/useMediaQuery";
import Link from "next/link";
import { useRouter } from "next/router";
import Cart from "../cart/Cart";
import styles from "./Layout.module.scss";
import SideNav from "./SideNav";

export default function Header() {
  const router = useRouter();
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();
  const matches = useMediaQuery("(min-width: 1121px)");

  const handleCartClick = () => {
    if (matches) {
      cartDispatch({
        type: "SHOW_CART_SIDEBAR",
        payload: true,
      });
    } else {
      router.push("/cart");
    }
  };

  const cartText = `${cartState.totalItems} ${
    cartState.totalItems > 1 ? "items" : "item"
  }`;

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.leftContainer}>
        <Link href="/">
          <img
            srcSet="/static/images/logo.png, /static/images/logo_2x.png 2x"
            src="/static/images/logo.png"
            alt="sabka_bazaar"
          />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.navLinks}>
          <Link href="/login">SignIn</Link>
          <Link href="/signup">Register</Link>
        </div>
        <button className={styles.cartButton} onClick={handleCartClick}>
          <img src="/static/images/cart.svg" alt="cart" />
          <span>{cartText}</span>
        </button>
        {matches && (
          <SideNav>
            <Cart />
          </SideNav>
        )}
      </div>
    </header>
  );
}
