import React from "react";

const Modal = (props) => {
  return (
    <div className="modal_container">
      <div className="modal_header">{props.header}</div>
      <div className="modal_body">{props.body}</div>
      <div className="modal_footer">{props.footer}</div>
    </div>
  );
};

export default Modal;
