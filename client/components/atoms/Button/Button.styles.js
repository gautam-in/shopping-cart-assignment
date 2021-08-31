import styled, { css } from "styled-components";

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  margin-top: 16px;
  background-color: var(--theme-pink);
  color: white;
  border-radius: 0;
  border: none;

  &:hover {
    background-color: var(--dark-pink);
  }

  ${(props) =>
    props["aria-disabled"] &&
    css`
      background-color: var(--dark-grey);
    `}
`;
