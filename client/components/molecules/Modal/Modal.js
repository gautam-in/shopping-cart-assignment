import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../../atoms/Button/Button";

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

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        inset: "0",
        display: "grid",
        justifyContent: "right",
        alignItems: "end",
        backgroundColor: "rgba(0,0,0,0.6)",
        paddingRight: "125px",
      }}
      onClick={closeModal}
    >
      <div
        className={`modal_design ${
          animateClose ? "modal_godown" : "modal_riseup"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flexed_jc_sb_ai_center">
          <div className="width_full">{title}</div>
          <button onClick={closeModal} aria-label="Close cart modal">
            &#10006;
          </button>
          <hr />
        </div>
        {children}
        <div className="checkout">
          <Button>
            <div className="flexed_jc_sb_ai_center">
              <span>Proceed to Checkout</span>
              Rs. 123
            </div>
          </Button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
