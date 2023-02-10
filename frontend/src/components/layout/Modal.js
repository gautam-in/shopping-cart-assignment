import React from "react";
import FocusTrap from "focus-trap-react";

import { createPortal } from "react-dom";
export default function Modal({ isOpen, message, onClose }) {
  if (!isOpen) return null;
  return createPortal(
    <FocusTrap>
      <div
        className="model-container"
        role="dialog"
        aria-labelledby="alert-message"
      >
        <div className="overlay" />
        <div className="modalbox text-center">
          <p data-testid="modal" id="alert-message">
            {message}
          </p>
          <button onClick={onClose}>ok</button>
        </div>
      </div>
    </FocusTrap>,
    document.getElementById("portal")
  );
}
