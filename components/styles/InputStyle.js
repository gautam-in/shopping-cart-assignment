import styled from 'styled-components';

export const InputStyle = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2em;
  padding: 0;
  &[aria-invalid='true'] > input {
    border-bottom: 1px solid var(--errorRed);
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--darkGrey);
    border-color: ${(props) => (props.error ? 'red' : 'var(--darkGrey)')};
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
    top: -15px;
    left: 0;
    font-size: 13px;
    opacity: 1;
    color: var(--themeBlue);
  }
  /* ,
  & input[type=email]:not(:focus):invalid ~ span

  for email case, we need to handle this
  */
  @media (min-width: 1025px) {
    width: 50%;
  }
`;

export const DropdownStyle = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
  select {
    font-family: 'Arial';
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 10px 15px;
    outline: 0;
    border: 0px solid #000000;
    border-radius: 0px;
    background: var(--themeRed);
    color: white;
    appearance: none;

    appearance: none;

    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 1.5em;
  }

  select::-ms-expand {
    display: none;
  }

  select:hover,
  select:focus {
    color: white;
    background: var(--themeRed);
  }
  select:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  & > div {
    position: absolute;
    top: 16px;
    right: 15px;
    width: 0px;
    height: 0px;
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  select:hover ~ div,
  select:focus ~ div {
    border-color: white;
  }
  select:disabled ~ div {
    border-top-color: #cccccc;
  }
`;
