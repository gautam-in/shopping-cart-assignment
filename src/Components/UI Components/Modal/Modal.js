import { useContext } from "react";
import ReactDom from "react-dom";
import CartContext from "../../../Context/CartContext/CartContext";
import "./Modal.scss";

const Modal = ({ children }) => {
  const {
    cart: { cartOpen },
    dispatch,
  } = useContext(CartContext);
  return ReactDom.createPortal(
    <div className="modal">
      <div
        className="modal__overlay"
        onClick={() => dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })}
      />
      <div>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
