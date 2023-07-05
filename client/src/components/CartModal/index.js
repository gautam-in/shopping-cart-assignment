import { useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./cartmodal.module.scss";
import CartContent from "../CartContent";
import { useCart } from "../../context/cart";

function CartModal() {
  const { isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
