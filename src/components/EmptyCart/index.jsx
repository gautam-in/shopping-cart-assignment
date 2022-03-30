import React from "react";
import { Button } from "../../global.styles";
import CartModalHeader from "../CartModalHeader";
import styled from "styled-components";

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


const EmptyCartModal = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100;
  overflow: auto;
  display: flex;
  flex-direction: column;
  right: 10%;
  background-color: #fff;
  height: 85%;
  width: 35%;
`;

export default EmptyCart;
