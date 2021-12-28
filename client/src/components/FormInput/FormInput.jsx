import React from 'react';
import styled from 'styled-components';

const FormControl = styled.div`
  position: relative;
  margin: 40px 0;
  width: 100%;
  input {
    border: 0;
    border-bottom: 1px solid #cccccc;
    padding: 10px 0;
    display: block;
    font-size: 100%;
    width: 100%;
    transition: 0.1s ease-in;
    &:focus,
    &:not(:placeholder-shown) {
      border-bottom-color: #50DAE4;
	    outline: none;
    }
    &:focus+label,
    &:not(:placeholder-shown)+label {
      color: #50DAE4;
	    transform: translateY(-30px);
    }
  }
  label {
    position: absolute;
    top: 15px;
    left: 0;
  }
`;

const FormInput = ({ label, value, name, type }) => {
  return (
    <FormControl>
      <input 
        type={type} 
        value={value}
        name={name}
        autoComplete='off'
        placeholder=' ' />
      <label>{label}</label>
    </FormControl>
  );
}

export default FormInput;