import React from "react";
import classes from "./cartHeader.module.scss";

function CartHeader({ onClose, count }) {
  const displayedCount = `(${count} item${count === 1 ? "" : "s"})`;
  return (
    <div className={classes.header}>
      <p>
        My Cart
        <span className={classes.subText}>{displayedCount}</span>
      </p>
      <button aria-label="close" className={classes.close} onClick={onClose}>
        <span>×</span>
      </button>
    </div>
  );
}

export default CartHeader;
