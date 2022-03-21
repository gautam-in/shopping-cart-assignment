import styled, { css } from "styled-components";

const shrinkLabel = css`
  top: 8px;
  font-size: 10px;
`;

export const FormContainer = styled.div`
  position: relative;

  .form-input {
    background: none;
    background-color: white;
    color: black;
    font-size: 18px;
    padding: 8px 0px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 16px 0;

    &:focus {
      outline: none;
      border-bottom: 3px solid #4a9cdb;
    }

    &:focus ~ .form-input-label {
      color: #4a9cdb;
      font-weight: 500;
      ${shrinkLabel};
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: grey;
    font-size: 12px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    top: 32px;
    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabel}
    }
  }
`;