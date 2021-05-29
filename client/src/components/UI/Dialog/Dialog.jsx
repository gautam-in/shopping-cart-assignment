import React from "react";
import "./Dialog.scss";
export default function Dialog(props) {
  const { dialog, setDialog, onDialogConfirm } = props;
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: dialog ? "block" : "none" }}
      data-test="component-dialog"
    >
      <div className="modal-content">
        <span
          className="close"
          onClick={() => setDialog(false)}
          data-test="dialog-span"
          id="dialog-span"
        >
          &times;
        </span>
        <p>Are you sure you want to place order ?</p>
        <div className="buttonContainer">
          <button
            className="button"
            onClick={() => setDialog(false)}
            data-test="dialog-cancel"
          >
            cancel
          </button>
          <button
            className="button"
            onClick={onDialogConfirm}
            data-test="dialog-confirm"
          >
            confirm
          </button>
        </div>
      </div>
    </div>
  );
}
