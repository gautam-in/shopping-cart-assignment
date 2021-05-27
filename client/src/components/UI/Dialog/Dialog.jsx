import React from "react";
import "./Dialog.scss";
export default function Dialog(props) {
  const { dialog, setDialog, onDialogConfirm } = props;
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: dialog ? "block" : "none" }}
    >
      <div className="modal-content">
        <span className="close" onClick={() => setDialog(false)}>
          &times;
        </span>
        <p>Are you sure you want to place order ?</p>
        <div className="buttonContainer">
          <button className="button" onClick={() => setDialog(false)}>
            cancel
          </button>
          <button className="button" onClick={onDialogConfirm}>
            confirm
          </button>
        </div>
      </div>
    </div>
  );
}
