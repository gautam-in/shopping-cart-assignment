import { createPortal } from "react-dom";
import styles from "./CartBackground.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartReducer";

const Background = () => {
  const cartDispatch = useDispatch();

  const setCartHandler = () => {
    cartDispatch(cartActions.setCartOpen(false));
  };

  return (
    <div
      className={styles["background-overlay"]}
      onClick={setCartHandler}
    ></div>
  );
};

const CartBackground = () => {
  return (
    <div>
      {createPortal(<Background />, document.getElementById("backdrop-root"))}
    </div>
  );
};

export default CartBackground;
