import styled from "styled-components";
import { ReactComponent as Icon } from "../../Components/CartIcon/cart.svg";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 0 100px;
  display: flex;
  box-shadow: 0 8px 8px -6px rgba(0, 0, 0, 0.3);
  position: relative;

  //tablet-view
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
  //mobile-view
  @media screen and (max-width: 580px) {
    height: 8vh;
  }
`;

export const Nav = styled.div`
  font-size: 15px;
  width: 30%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding-bottom: 15px;
  font-weight: bolder;
  cursor: pointer;

  //mobile-view
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const SigninCart = styled.div`
  margin-left: auto;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  //tablet-view
  @media screen and (max-width: 1200px) {
    width: 24%;
  }
  //mobile-view
  @media screen and (max-width: 580px) {
    width: 40%;
  }
`;

export const Signin = styled.div`
  display: flex;
  justify-content: space-around;
  //tablet-view
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  //mobile-view
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  background-color: #f2f2f2;
  font-size: 18px;
  cursor: pointer;

  //mobile-view
  @media screen and (max-width: 580px) {
    height: 100%;
  }
`;

export const CartIcon = styled(Icon)`
  height: 36px;
  width: 36px;
  margin: 0 10px;
  fill: rgb(237, 27, 62);
`;

export const Option = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const LogoImg = styled.img`
  height: 90%;
  width: 85%;
`;
