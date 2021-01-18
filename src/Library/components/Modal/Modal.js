import React from "react";
import { Modal as MaterialUiModal } from '@material-ui/core';

const Modal = props => {
  const { isModalOpen, setModal, children } = props;

  const body = (
    <div 
      style={{
        position: "absolute",
        width: 300,
        backgroundColor: "white",
        border: "2px solid #000",
        padding: "10px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {children}
    </div>
  );

  return (
    <MaterialUiModal
      open={isModalOpen}
      onClose={() => setModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </MaterialUiModal>
  )
}

export default Modal;
