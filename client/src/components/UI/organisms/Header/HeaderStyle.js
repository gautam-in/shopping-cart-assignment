import styled from "styled-components";
import logo from "../.././../../Images/cart.svg";

const HeaderMain = styled.header`
  // display: flex;
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
  width: 600px;
  margin: 0 auto;
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
const Home1 = styled.div`
  margin-top: 1rem;
  a {
    padding: 0 1rem;
  }
  span {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    color: #787878;
  }
`;
const Cart = styled.div`
  width: 118px;
  margin: 3rem 0 0 3rem;
`;

const CartMain = styled.div`
  background-color: #ece8e8;
  // right: 1rem;
  // bottom: 0;
  padding: 15px;
  cursor: pointer;
  span {
    font-weight: 800;
  }
  svg {
    color: #d10256;
  }
`;

const Login = styled.div``;

export {
  HeaderMain,
  HeaderWrap,
  Logo,
  Nav,
  Home,
  Cart,
  CartMain,
  Home1,
  Login,
};
