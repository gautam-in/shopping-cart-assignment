import { createPortal } from "react-dom";
import classes from "./cartmodal.module.scss";
import CartContent from "../CartContent";
import { useCart } from "../../context/cart";

function CartModal() {
  const { isCartOpen, setIsCartOpen } = useCart();

  return createPortal(
    <dialog open={isCartOpen} className={classes.dialogContainer}>
      <div className={classes.dialog}>
        <CartContent onClose={() => setIsCartOpen(false)} />
      </div>
    </dialog>,
    document.body
  );
}

export default CartModal;
