import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

const modalRoot = document.getElementById("modal-root");

function Modal({ children, title, isOpen, handleClose }) {
  const [animateClose, setAnimateClose] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setAnimateClose(false);
    } else document.body.style.overflow = "";
  }, [isOpen]);

  const closeModal = () => {
    setAnimateClose(true);
    setTimeout(() => {
      setAnimateClose(false);
      handleClose();
    }, 300);
  };

  const CartHeader = ({ title }) => {
    return (
      <div className="flexed_jc_sb_ai_center modal_header">
        <div className="width_full">{title}</div>
        <button onClick={closeModal} aria-label="Close cart modal">
          &#10006;
        </button>
      </div>
    );
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal_container" onClick={closeModal}>
      <div
        className={`modal_design ${
          animateClose ? "modal_godown" : "modal_riseup"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <CartHeader title={title} />
        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
