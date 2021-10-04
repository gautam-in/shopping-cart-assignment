import React from "react";
import Navigation from "./navigation";
import Cart from "../containers/Cart"
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

/**
 * .....................................................
 * Header Styles Using STYLED  COMPONENTS
 * ....................................................
 */
const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #111;
  box-shadow: 0px 15px 10px -15px #111;
  padding: 0px 50px;
  height: 100px;
  margin-bottom: 20px;
  background-color: white;
  @media (max-width: 768px) {
   padding:0 20px;
  }

`;
const MenuStyle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-basis: 350px;
`;
const LogoStyle = styled.img`
  width: 150px;
  @media (max-width: 768px) {
    width:110px;
  }
`;

const CartStyle = styled.div`
  width: 120px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 15px;
  background-color: rgba(211, 211, 211, 0.979);
  padding: 2px;
  gap: 5px;
  cursor: pointer;
  p{
    align-self:flex-end;
  }
`;

/**
 *
 * ------------------------------------------........--
 *   HEADER COMPONENT
 * .....................................................
 */
const Header = ({ isNav = true }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const state = useSelector((state) => state.updateCart);
  let pageLinks = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/product",
      name: "Products",
    },
  ];
  let registrationLinks = [
    {
      href: "/login",
      name: "SignIn",
    },
    {
      href: "/register",
      name: "Register",
    },
  ];

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <HeaderStyle>
      <MenuStyle>
        <LogoStyle src={'/images/logo.png'} alt="Logo" />
        {isNav && <Navigation links={pageLinks} />}
      </MenuStyle>
      <div className="side-nav">
        {isNav && <Navigation links={registrationLinks} />}
        <CartStyle onClick={openModal}>
          <i
            className="fa fa-shopping-cart cart-img"
            style={{ fontSize: "40px", color: "red" }}
          ></i>
          <p>{state.cart.length} items</p>
        </CartStyle>
        {modalIsOpen && (
          <Cart
            open={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
