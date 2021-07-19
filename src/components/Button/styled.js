import styled from "styled-components";

export const ButtonBase = styled.button`
  background: #bf2957;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12 px;
  padding: 16px;
  border: none;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;
