import React from "react";
import {
  incrementItem,
  decrementItem,
  removeItem,
} from "client/components/redux";

import "./CartSelectedProducts.scss";

function CartSelectedProducts({ item, dispatch }) {
  const CartAlterationBtn = ({ icon, handleClick, label }) => {
    return (
      <span
        onClick={handleClick}
        className="flexed_center_all quantity_change_button noselect"
        aria-label={label}
      >
        {icon}
      </span>
    );
  };

  return (
    <div key={item.id} className="flexed_ai_center selected_card">
      <img src={item.imageURL} alt={item.name} width="80" />
      <div className="width_full">
        <div>{item.name}</div>
        <div className="flexed_jc_sb_ai_center">
          <div className="flexed_jc_sb_ai_center" style={{ width: "140px" }}>
            <CartAlterationBtn
              icon="-"
              label="Decrement button"
              handleClick={() => dispatch(decrementItem(item))}
            />
            <span>{item.quantity}</span>
            <CartAlterationBtn
              icon="+"
              label="Increment button"
              handleClick={() => dispatch(incrementItem(item))}
            />
            <span
              onClick={() => dispatch(removeItem(item))}
              aria-label="Remove item"
            >
              &#10006;
            </span>
            Rs.{item.price}
          </div>
          <div>Rs.{item.quantity * item.price}</div>
        </div>
      </div>
    </div>
  );
}

export default CartSelectedProducts;
