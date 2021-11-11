import styled from "styled-components";

export const InputStyle = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;

  input {
    width: 100%;
    outline: none;
    border: none;
    padding: 20px 0px 10px 0px;
    border-bottom: 2px solid var(--gray);
    line-height: 1.5rem;
    font-size: 1rem;
  }

  input:focus {
    border-color: var(--skyBlue);
    transition: 0.2s ease all;
  }
  label {
    position: absolute;
    top: 15px;
    left: 0px;
    color: var(--darkGray);
    transition: 0.2s ease all;
    pointer-events: none;
  }

  input:focus ~ label,
  input[value]:not([value=""]) ~ label {
    top: -5px;
    font-size: 0.9rem;
    opacity: 1;
    color: var(--skyBlue);
  }
`;

export const LargeButtonStyle = styled.div`
  width: 100%;
  input {
    width: 100%;
    outline: none;
    border: none;
    line-height: 1.3rem;
    padding: 0.8rem;
    background-color: var(--brickRed);
    color: var(--white);
    font-size: 1rem;
    margin-top: 20px;
  }
`;
