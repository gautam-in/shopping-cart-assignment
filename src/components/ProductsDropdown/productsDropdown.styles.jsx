import styled from "styled-components";

export const CategorySelector = styled.select`
  width: 100vw;
  padding: 16px;
  display: none;
  color: #fff;
  background-color: #d00256;
  @media (max-width: 500px) {
    display: unset;
  }
`;
