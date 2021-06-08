import React from "react";
import "./Dialog.scss";
export default function Dialog(props) {
  const { dialog, setDialog, onDialogConfirm } = props;
  return (
    <section
      id="myModal"
      className="modal"
      style={{ display: dialog ? "block" : "none" }}
      data-test="component-dialog"
    >
      <section className="modal-content">
        <span
          className="close"
          onClick={() => setDialog(false)}
          data-test="dialog-span"
          id="dialog-span"
        >
          &times;
        </span>
        <p>Are you sure you want to place order ?</p>
        <section className="buttonContainer">
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
        </section>
      </section>
    </section>
  );
}
