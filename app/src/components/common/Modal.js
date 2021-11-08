import React from "react";
import style from "./Modal.module.css";
/*
 * props.showModal =  needs to pass from the calling component, on the basis of boolean, modal will show or hide
 * props.closeModalHandler = needs to pass the closeModalHandler to update the value of showModal props in the calling Component
 * props.title = this will show the Title of The Modal
 *  props.children =  This is used to display the content passed between the opening and closing of the modal tag
 */

const Modal = (props) => {
  return props.showModal ? (
    <>
      <div
        onClick={props.closeModalHandler}
        className={style.modalBackground}
      />

      <div>
        <div className={style.modalWrapper}>
          <div className={style.modalHead}>
            <h4>{props.title}</h4>
            <span
              className={style.modalCross}
              onClick={props.closeModalHandler}
            >
              &#10006;
            </span>
          </div>
          <div className={style.modalChildren}>{props.children}</div>
        </div>
      </div>
    </>
  ) : null;
};

Modal.defaultProps = {
  title: "Title",
};
export default Modal;
