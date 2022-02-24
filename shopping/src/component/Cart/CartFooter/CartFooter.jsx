import React, { useState, useEffect, useContext } from "react";
import CustomButton from "../../Custom-Button/CustomButton";
import "./cartFooter.css";
import { cartContext } from "../../../Context/CartContext";
import { useNavigate } from "react-router-dom";

function CartFooter() {
  const contextData = useContext(cartContext);
  const { open, setOpen, cartItems } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <div className="cartFooter">
      {console.log(contextData.cartItems.length)}
      {contextData.cartItems.length > 0 ? (
        <>
          <p>Promo code can be applied on payment page</p>
          <CustomButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <span>Proceed to Checkout</span>
            <span>Rs.{contextData.totalprice} </span>
          </CustomButton>
        </>
      ) : (
        <>
          <CustomButton
            onClick={() => {
              setOpen(false);
              navigate("/product");
            }}
          >
            <span>Start Shopping</span>
          </CustomButton>
        </>
      )}
    </div>
  );
}

export default CartFooter;
