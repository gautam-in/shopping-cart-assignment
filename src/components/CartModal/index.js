import React from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.css";

import Cart from "../Cart";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Cart noOfItems={props.noOfItems} onClick={props.onClick} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default CartModal;
