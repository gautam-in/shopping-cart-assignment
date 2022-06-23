import React from 'react'
// import { useEffect } from 'react';
// import { useRef } from 'react';
import { useState } from 'react';
import { StyledInput } from './Input.styled';

const Input = ({ inputName, inputValue, labelName, type, errMsg, onInputChange, onKeyInputPress }) => {

  return (
    <StyledInput className='form-group'>
      <div className="form-input">
        <input
          type={type}
          id={inputName}
          name={inputName}
          onChange={onInputChange}
          value={inputValue}
          onKeyPress={onKeyInputPress}
          autoComplete="off"
          // aria-invalid={validInput ? "false" : "true"}
          aria-describedby="uidnote"
          required
        />
        <label htmlFor={inputName} className="label-name">
          <span className='content-name'>{labelName}</span>
        </label>
      </div>
      <span
        className={`error`}
        id='uidnote'
      >{errMsg}</span>
    </StyledInput>
  )
}

export default Input;