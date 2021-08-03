import { useState } from "react";
import styled from "styled-components";

import { useStore } from "../store/Store";
import CartBody from "./CartBody";

const CartButton = styled.button`
  background: #dedede;
  border: 0;
  padding: 10px 20px;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: auto;
  cursor: pointer;

  @media (max-width: 767px) {
    margin: 0;
    height: 100%;
  }

  .cart-icon {
    width: 30px;
    margin-right: 8px;
  }
`;

const CartWrapper = styled.div`
  position: relative;
`;

const CartBackdrop = styled.button`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  display: block;
  width: 100%;
  border: 0;
  outline: 0;
`;

export default function Cart() {
  const [globalState] = useStore();
  const cartItems = globalState.cartItems;
  const [toggle, setToggle] = useState(false);

  function toggleCart() {
    setToggle(!toggle);
  }

  return (
    <CartWrapper>
      <CartButton onClick={toggleCart}>
        <img src="/static/images/cart.svg" alt="Cart" className="cart-icon" />
        {cartItems.length} items
      </CartButton>
      <CartBody toggle={toggle} toggleCart={toggleCart} cartItems={cartItems} />
      {toggle && <CartBackdrop onClick={toggleCart} />}
    </CartWrapper>
  );
}
