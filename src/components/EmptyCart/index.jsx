import React from "react";
import { Button } from "../../global.styles";
import CartModalHeader from "../CartModalHeader";
import { EmptyCartModal } from "./emptyCart.styles";
import { Link } from "react-router-dom";

const EmptyCart = ({ setIsCartVisible }) => {
  return (
    <EmptyCartModal
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <CartModalHeader quantity={0} setIsCartVisible={setIsCartVisible} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <span style={{ fontSize: 20, fontWeight: 700 }}>
          No Items in your cart
        </span>
        <span>Your favourite items are just a click away</span>
      </div>
      <Button
        style={{
          display: "flex",
          width: "95%",
          alignSelf: "center",
          justifyContent: "center",
          marginBottom: 8,
        }}
        onClick={() => {
          setIsCartVisible((prev) => !prev);
        }}
      >
        Start Shopping
      </Button>
    </EmptyCartModal>
  );
};

export default EmptyCart;
