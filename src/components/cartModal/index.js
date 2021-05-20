import React from "react";
import Modal from "../common/modal";
import Cart from "../../containers/cartPage";
import "./index.scss";

const CartModal = (props) => {
  return (
    <Modal showModal={props.showModal}>
      <Cart handleClose={props.handleClose} />
    </Modal>
  );
};

export default CartModal;
