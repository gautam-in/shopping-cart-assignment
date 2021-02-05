import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  return props.displayModal ? (
    <div className="modal" onClick={props.closeModal}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <span className="title">
            <span className="cartTitle">My Cart </span>
            {props.totalItems > 0 && <span>({props.totalItems} items)</span>}
          </span>
          <button className="close" onClick={props.closeModal}>
            <img src={"/images/close.svg"} alt="close" />
          </button>
        </div>
        <div className="modalSubContent">{props.children}</div>
        <div className="modalFooter">
          {props.totalItems > 0 && (
            <div>Promo code can be applied on payment page</div>
          )}
          <button
            className={props.totalPrice > 0 ? "title" : "start title"}
            onClick={props.closeModal}
          >
            {props.totalPrice > 0 ? (
              <>
                <span>Proceed to CheckOut</span>
                <span>
                  Rs.{props.totalPrice}
                  <span className="arrow">{">"}</span>
                </span>
              </>
            ) : (
              <span>Start Shopping</span>
            )}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;
