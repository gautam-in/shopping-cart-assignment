import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const modalRoot = document.getElementById("modal-root");

const Modal = (props) => {
  // return props.showModal ? (
  //   <div className="modal_container">
  //     <div className="modal_wrapper">
  //       {props.header && <div className="modal_header">{props.header}</div>}
  //       {props.children}
  //       {props.footer && <div className="modal_footer">{props.footer}</div>}
  //     </div>
  //   </div>
  // ) : null;

  return ReactDOM.createPortal(
    <div className="modal_container">
      <div className="modal_wrapper">
        {props.header && <div className="modal_header">{props.header}</div>}
        {props.children}
        {props.footer && <div className="modal_footer">{props.footer}</div>}
      </div>
    </div>,
    modalRoot
  );
};
export default Modal;
