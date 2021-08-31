import styled, { css } from "styled-components";

export const TextFieldWrapper = styled.div`
  margin-bottom: 32px;
  position: relative;

  ${(props) =>
    props.error &&
    css`
      border-left: 4px solid var(--red);
      padding-left: 8px;

      input {
        border-bottom: 2px solid var(--red);
      }

      label {
        left: 8px;
      }
    `}
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 8px 10px 10px 0;
  box-sizing: border-box;
  border-bottom: 2px solid var(--grey);

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--theme-blue);

    & + label {
      color: var(--theme-blue);
      -webkit-transform: translateY(-16px) scale(0.8);
      transform: translateY(-16px) scale(0.8);
      transition: transform 0.2s ease, -webkit-transform 0.2s ease;
      transform-origin: left;
      will-change: transform;
    }
  }
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(10px);
  color: var(--grey);

  ${(props) =>
    props.hasInput &&
    css`
      -webkit-transform: translateY(-16px) scale(0.8);
      transform: translateY(-16px) scale(0.8);
      transform-origin: left;
      will-change: transform;
    `}
`;

export const Error = styled.div`
  margin-top: 8px;
  color: var(--red);
  font-size: 0.75rem;
`;
