import React from "react";
import "./CartAlterationBtn.scss";

function CartAlterationBtn({ icon, handleClick, label }) {
  return (
    <button
      onClick={handleClick}
      className="flexed_center_all quantity_change_button noselect"
      aria-label={label}
    >
      {icon}
    </button>
  );
}

export default CartAlterationBtn;
