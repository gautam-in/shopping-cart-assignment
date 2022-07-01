import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CartHeader = ({ counter }) => {
  return (
    <>
      <div className="cart-header">
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
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </>
  );
};

export default CartHeader;
