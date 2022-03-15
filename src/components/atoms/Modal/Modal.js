import React, { useContext, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { GlobalContext } from "../../../contexts/GlobalContext";
import useFocusTrap from "../../../utils/useFocusTrap";
import "./Modal.scss";

export default function Modal({ children }) {
  const {
    cartItems: { cartOpen },
    dispatch,
  } = useContext(GlobalContext);

  const ref = useRef(null);
  const setElementRef = useFocusTrap(null);

  useEffect(() => {
    if (cartOpen) {
      setElementRef(ref);
      document.body.style.overflow = "hidden";
    }

    return () => {
      setElementRef(null);
      document.body.style.overflow = "unset";
    };
  }, [cartOpen]);

  return ReactDom.createPortal(
    <div className="modal" ref={ref}>
      <div
        className="modal__overlay"
        onClick={() => dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })}
      />
      <div>{children}</div>
    </div>,
    document.getElementById("portal")
  );
}
