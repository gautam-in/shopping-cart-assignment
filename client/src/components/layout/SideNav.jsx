import { useCartState } from "@/src/hooks/useCartContext";
import styles from "./Layout.module.scss";

export default function SideNav({ children }) {
  const cartState = useCartState();

  if (cartState.showCartSideBar) {
    return <div className={styles.sideNavContainer}>{children}</div>;
  }

  return null;
}
