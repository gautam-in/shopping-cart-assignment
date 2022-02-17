import styled from "styled-components";
import { Link } from "react-router-dom";
export const MenuBarContainer = styled.aside`
  display: none;
  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: column;
    flex: 1 0 20%;
    background-color: var(--color-light);
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex: 1 0 20%;
    background-color: var(--color-light);
  }
`;
export const MenuItem = styled(Link)`
  display: block;
  padding: 0.8rem;
  color: var(--color-dark));
  text-decoration: none;
`;
