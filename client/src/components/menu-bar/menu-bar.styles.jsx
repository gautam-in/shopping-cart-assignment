import styled from "styled-components";
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
export const MenuItem = styled.div`
  display: block;
  padding: 0.8rem;
  color: var(--color-dark);
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px dotted var(--color-gray);
  &:hover {
    color: var(--color-gray);
  }
`;
