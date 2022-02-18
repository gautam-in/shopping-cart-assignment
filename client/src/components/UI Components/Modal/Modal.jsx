import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleCart } from "../../../store/cartReducer/cartActions";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  const {
    cart: { cartOpen },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  return ReactDom.createPortal(
    <div className={classes.modal}>
      <div
        className={classes.modal__overlay}
        onClick={() => dispatch(handleCart(cartOpen))}
      />
      <div>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
