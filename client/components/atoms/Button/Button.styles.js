import styled, { css } from "styled-components";
import { sizes } from "../../../global/styles/sizes";

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

  @media (max-width: ${sizes.mobileL}) {
    padding: 10px 10px;
  }

  ${(props) =>
    props["aria-disabled"] &&
    css`
      background-color: var(--dark-grey);

      &:hover {
        background-color: var(--dark-grey);
      }
    `}
`;
