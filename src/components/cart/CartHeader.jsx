import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const CartHeader = ({ counter }) => {
  return (
    <>
      <div className="cart-header" onClick={() => {}}>
        <span className="header">
          <h3 className="d-inline-block me-2">My Cart</h3> ({counter} items)
        </span>
        <button
          title="cart close button"
          id="closeCartPanel"
          onClick={() => {
            let panel = document.getElementById("cartPanel");
            panel.classList.remove("active");
            document.body.style.overflow = "auto";
          }}
        >
          <FontAwesomeIcon icon={solid("times")} />
        </button>
      </div>
    </>
  );
};

export default CartHeader;
