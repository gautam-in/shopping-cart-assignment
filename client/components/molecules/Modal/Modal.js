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
        // style={{
        //   padding: 20,
        //   background: "#fff",
        //   borderRadius: "2px",
        //   display: "inline-block",
        //   position: "relative",
        //   minWidth: "400px",
        //   boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        //   justifySelf: "center",
        //   overflow: "auto",
        //   height: "80vh",
        // }}
        // className="modal_riseup"
        // className="modal_godown"
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
        <button className="checkout flexed_jc_sb_ai_center">
          <span>Proceed to Checkout</span>
          <span>Rs. 123</span>
        </button>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
