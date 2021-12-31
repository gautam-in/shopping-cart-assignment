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
    top: 5px;
    left: 0;
  }
  span {
    display: inline-block;
    font-size: 85%;
    font-weight: 600;
    margin-top: 5px;
    color: #FB0217;
  }
`;

const FormInput = ({ 
    label, 
    value, 
    name, 
    type, 
    onChange, 
    errors,
    ...otherProps }) => {
  return (
    <FormControl>
      <input 
        type={type} 
        value={value}
        name={name}
        autoComplete='off'
        placeholder=' '
        aria-label={label}
        onChange={onChange}
        {...otherProps} 
        id={name}/>
      <label htmlFor={name}>{label}</label>
      {errors?.hasError ? <span>{errors.errMessage}</span> : null}
    </FormControl>
  );
}

export default FormInput;