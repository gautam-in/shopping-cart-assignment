import styled from "styled-components";

export const mainColor = "#d00256";

export const Button = styled.button`
  border: none;
  color: #fff;
  font-weight: 700;
  background-color: #d00256;
  padding: 12px;
  &:hover {
    background-color: #d93578;
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
  }
`;
