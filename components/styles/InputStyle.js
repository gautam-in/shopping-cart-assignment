import styled from 'styled-components';

export const InputStyle = styled.div`
  position: relative;
  width: 50%;
  margin-top: 2em;
  &[aria-invalid='true'] > input {
    border-bottom: 1px solid var(--errorRed);
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--darkGrey);
    box-shadow: none !important;
    line-height: 2em;
    font-size: 1.2em;
  }

  input:focus {
    border-color: var(--themeBlue);
    border-width: medium medium 2px;
  }
  span {
    position: absolute;
    pointer-events: none;
    top: 15px;
    left: 10px;
    transition: 0.2s ease all;
  }
  & input:focus ~ span,
  & input:not(:focus):valid ~ span {
    top: -7px;
    left: 0;
    font-size: 13px;
    opacity: 1;
    color: var(--themeBlue);
  }
`;
