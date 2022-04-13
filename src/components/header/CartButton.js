import styles from "./CartButton.module.scss";
import { ReactComponent as CartLogo } from "./cart.svg";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartReducer";

const CartButton = () => {
  const { cartItems, cartTotalItemsCount } = useSelector((state) => state.cart);
  const cartDispatch = useDispatch();

  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);
    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  const onClickHandler = () => {
    cartDispatch(cartActions.setCartOpen(true));
  };

  return (
    <div
      className={`${styles["cart-bar"]} ${isBtnHighlighted ? styles.bump : ""}`}
      onClick={onClickHandler}
    >
      <CartLogo className={styles["cart-logo"]} />
      <div
        className={styles["cart-items"]}
      >{`${cartTotalItemsCount} items`}</div>
    </div>
  );
};
export default CartButton;
