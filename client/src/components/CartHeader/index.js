import React from "react";
import classes from "./cartHeader.module.scss";

function CartHeader({ onClose, count }) {
  return (
    <div className={classes.header}>
      <p>
        My Cart
        <span className={classes.subText}>
          {" "}
          ({count} item{count === 1 ? "" : "s"})
        </span>
      </p>
      <button className={classes.close} onClick={onClose}>
        <span>×</span>
      </button>
    </div>
  );
}

export default CartHeader;
