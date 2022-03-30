import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: #fff;
  box-shadow: 0 20px 30px -30px rgba(0, 0, 0, 0.7);
  top: 0;
  flex-direction: row;
  padding-inline: 10%;
  z-index: 3;
  @media (max-width: 800px) {
    padding-inline: 0;
  }
`;

export const Logo = styled.img`
  margin-right: 64px;
  padding: 8px;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
`;

export const CartButton = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  color: rgb(80, 80, 80);
  text-decoration: none;
`;
