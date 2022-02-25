import React, { createContext, useContext, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { cartContext } from "../../Context/CartContext";
import "./modal.css";
import CartItems from "../../component/Cart/CartItems/CartItems";
import CartHeader from "../../component/Cart/CartHeader/CartHeader";
import CartFooter from "../../component/Cart/CartFooter/CartFooter";

const Modal = ({ children, onClose, onModalClose }) => {
  const { open, setOpen } = useContext(cartContext);
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  }, []);
  const modalRef = createRef();

  const handleTabKey = (e) => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  const keyListenersMap = new Map([
    [27, onModalClose],
    [9, handleTabKey],
  ]);
  useEffect(() => {
    var body = document.body;
    if (open && window.screen.width < 1025) {
      body.classList.add("overHidden");
    } else {
      body.classList.remove("overHidden");
    }
  }, [open]);
  return (
    <>
      {open
        ? ReactDOM.createPortal(
            <div className="modal-container">
              <div class="overlay"></div>
              <div className="modal-container" role="dialog" aria-modal="true">
                <div className="modal" ref={modalRef}>
                  {children}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};
Modal.Header = function ModalHeader(props) {
  return <div className="modal-header">{props.children}</div>;
};
Modal.Body = function ModalBody(props) {
  return <div className="modal-body">{props.children}</div>;
};

Modal.Footer = function Footer(props) {
  return <div className="modal-footer">{props.children}</div>;
};
export default Modal;
