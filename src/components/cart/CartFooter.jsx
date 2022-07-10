import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CartFooter = ({ isEmpty, totalPrice }) => {
  return (
    <>
      <div className="cart-footer outline">
        <span className="info" role={"contentinfo"} title="Promotional">
          Promo can be added on payment page
        </span>
        <button
          className={`btn d-flex justify-content-${
            isEmpty ? "center" : "between"
          } align-items-center`}
          style={{ borderRadius: "6px" }}
          onClick={() => {
            let panel = document.getElementById("cartPanel");
            panel.classList.remove("active");
            document.body.style.overflow = "auto";
          }}
        >
          <span>{isEmpty ? "Start Shopping" : "Proceed to Checkout"}</span>
          {!isEmpty && (
            <span>
              Rs.{totalPrice}{" "}
              <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default CartFooter;
