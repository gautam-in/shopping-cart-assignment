import Link from "next/link";
import NavStyles from "./NavStyles";
import styled from "styled-components";
import Cart from "./Cart";
import { useState, useContext } from "react";
import CartContext from "./context/CartContext";
const CartStyled = styled.img`
  height: 40px;

  cursor: pointer;
  ::after {
    content: "";
    height: 100%;
    width: 100%;
  }
`;

const CartContain = styled.div`
  text-align: center;

  padding: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

const LoginContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 1rem;
`;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function Nav() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { numItems, setNumItems } = useContext(CartContext);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function increaseitemNum() {
    setItemnum(itemnum + 1);
  }
  return (
    <>
      <NavStyles>
        <Link href="/">Home</Link>

        <Link href="/products">Products</Link>
      </NavStyles>
      <Contain>
        <LoginContain>
          <Link href="/login">
            <h3>Login</h3>
          </Link>
          <Link href="/signup">
            <h3>Signup</h3>
          </Link>
        </LoginContain>

        <CartContain
          onClick={() => {
            openModal();
          }}
        >
          <CartStyled src="/static/images/cart.svg"></CartStyled>
          <h3>{numItems} items</h3>
        </CartContain>
        <Cart isOpen={modalIsOpen} close={closeModal} />
      </Contain>
    </>
  );
}
