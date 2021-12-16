import styled from "styled-components";

const HeaderMain = styled.header`
  min-height: 90px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2px;
  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    color: #787878;
  }
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;
const HeaderWrap = styled.div`
  max-width: 1320px;
  display: flex;
  margin: auto;
`;

const Logo = styled.img`
  width: 20rem;
`;
const Nav = styled.nav`
  width: -webkit-fill-available;
  display: flex;
`;
const Home = styled.div`
  width: 770px;

  padding: 5rem 0 0 0;
  a {
    padding: 0 3rem;
  }
  span {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    color: #787878;
  }
`;
const Login = styled.div`
  max-width: 1320px;
  margin-top: 1rem;
  a {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;
const Cart = styled.div`
  width: 118px;
  margin: 3rem 0 0 3rem;
`;

const CartMain = styled.div`
  background-color: #ece8e8;

  padding: 15px;
  cursor: pointer;
  span {
    font-weight: 800;
  }
  svg {
    color: #d10256;
  }
`;

const User = styled.span`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 800;
  font-family: Arial, Helvetica, sans-serif;
  color: #787878;
  text-transform: capitalize;
`;

export { HeaderMain, HeaderWrap, Logo, Nav, Home, Cart, CartMain, Login, User };
