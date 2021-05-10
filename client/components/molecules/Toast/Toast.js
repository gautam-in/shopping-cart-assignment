import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Toast.scss";

const modalRoot = document.getElementById("modal-root");

function Toast({ duration = 1000, handleClose }) {
  /* const [showToast, show] = useState(true); */

  useEffect(() => {
    setTimeout(() => {
      handleClose(false);
    }, duration);
  }, []);

  /* if (!showToast) return null; */
  return ReactDOM.createPortal(
    <div
      className="toast_container"
      style={{
        left:
          Math.min(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
          ) - 250,
      }}
    >
      <div
        className={`toast_design flexed_ai_center`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <CartHeader title={title} /> */}
        <span className="toast_content">Items added successfully.</span>
        <button
          onClick={() => handleClose(false)}
          aria-label="Close cart modal"
        >
          &#10006;
        </button>
      </div>
    </div>,
    modalRoot
  );
}

export default Toast;
