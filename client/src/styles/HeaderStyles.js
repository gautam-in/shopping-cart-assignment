import styled from "styled-components";

const HeaderStyles = styled.header`
  background-color: var(--white);
  box-shadow: 5px 5px 15px grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  max-height:70px;
  top: 0px;
  z-index: 1;
  NavLink {
    color: "red",
    textDecoration: "underline",
  }
  section{
    display:flex;
    align-items:center;
  }

`;

const Logo = styled.img`
  width: 150px;
  height: 60px;
`;
const NavStyles = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 480px) {
    a {
      display: none;
    }
  }
`;

const CartStyles = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 50px;
    height: 50px;
  }
  a {
    margin: 0.2rem 1rem;
  }
`;
const CustomButton = styled.button`
  padding: 0 0.75rem;
  margin: 0;
  margin-bottom: 1px;
  border-color: transparent;
  background-color: var(--grey);
  text-transform: none;
  display: flex;
  height: auto;
  cursor: pointer;
  border: none;
  border-radius: 0;
  text-decoration: none;
`;

export { Logo, HeaderStyles, NavStyles, CartStyles, CustomButton };
