import { createPortal } from "react-dom";
import Cart from "../components/cart/Cart";

const CartOverlay = () => {
  return createPortal(<Cart />, document.getElementById("overlay-root"));
};

export default CartOverlay;
