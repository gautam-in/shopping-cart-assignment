import { CartStyled } from "./styles/CartStyles";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Home from "../components/Home";
import { useState, useContext } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import CartContext from "./context/CartContext";
import { LogoStyled } from "./styles/LogoStyled";
import Link from "next/link";
import { useRouter } from "next/router";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "96%",
    zIndex: "1",
    padding: 0,
    backgroundColor: "#ededed",
    display: "flex",
    flexDirection: "column",
  },
};

const ModalHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  h2 {
    color: white;
  }
  img {
    height: 15px;
    width: 15px;
  }
  padding: 10px;
  text-align: center;
  color: black;
  padding: 10px;
  position: sticky;
`;

const CheckoutStyled = styled.div`
  width: 100%;
  background-color: white;
  height: 5%;

  padding: 7px;
  p {
    font-size: x-small;
  }
  button {
    width: 100%;
    height: 200%;
    background: #c94e38;
    font-weight: 500;
    text-align: center;
    color: white;
    background-color: #e33244;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
  position: relative;
  top:80%;

`;

const NoItemStyled = styled.div`
  width: 70%;
  padding: 5px;
  align-self: center;
  position: absolute;
  top: 40%;
`;

export default function Cart({ isOpen, close }) {
  let subtitle;
  const { cart, setCart, numItems, setNumItems } = useContext(CartContext);
  const router = useRouter();

  let bottomButton;
  if (numItems > 0) {
    bottomButton = <button>Proceed to Checkout</button>;
  } else {
    bottomButton = (
      <button
        onClick={() => {
          close();
          router.push("/products");
        }}
      >
        Start Shopping
      </button>
    );
  }
  return (
    isOpen && (
      <CartStyled>
        <Modal isOpen={isOpen} style={customStyles}>
          <ModalHeaderStyled>
            <h2>My Cart ({numItems} Items)</h2>
            <a>
              <h2
                onClick={() => {
                  close();
                }}
              >
                X
              </h2>
            </a>
          </ModalHeaderStyled>
          {cart.map((item) => {
            console.log("Item qty", item);
            return (
              item.quantity > 0 && (
                <CartItem
                  item={item}
                  setCart={setCart}
                  cart={cart}
                  numItems={numItems}
                  setNumItems={setNumItems}
                />
              )
            );
          })}
          {numItems > 0 ? (
            <LogoStyled>
              <img src="/static/images/lowest-price.png"></img>
              <p>You cant find it cheaper anywhere</p>
            </LogoStyled>
          ) : (
            <NoItemStyled>
              <h3>No Items in your cart</h3>{" "}
              <h5>you are just one click away from your favourite items</h5>
            </NoItemStyled>
          )}
          <CheckoutStyled>
            {numItems > 0 ? (
              <p>Promocode will be applied on checkout page</p>
            ) : null}
            {bottomButton}
          </CheckoutStyled>
        </Modal>
      </CartStyled>
    )
  );
}
