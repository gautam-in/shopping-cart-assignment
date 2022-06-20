import React from 'react'
import { StyledInput } from './Input.styled';

const Input = ({inputName, labelName, type}) => {
  return (
    <StyledInput className='form-group'>
      <div className="form-input">
        <input type={type} name={inputName} autoComplete="off" required />
        <label htmlFor={inputName} className="label-name">
          <span className='content-name'>{labelName}</span>
        </label>
      </div>
        <span className='error'>Please enter a valid email address !</span>
    </StyledInput>
  )
}

export default Input;