import React from "react";

import styled, { css } from "styled-components";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormContainer>
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </FormContainer>
  );
};


const shrinkLabel = css`
  top: 8px;
  font-size: 10px;
`;

const FormContainer = styled.div`
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


export default FormInput;
