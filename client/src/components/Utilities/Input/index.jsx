import React, { useEffect, useState } from 'react'

import { StyledInput } from './Input.styled';

const Input = ({ inputName, labelName, type, errMsg, onInputChange, onBlurChange }) => {

  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [validInput, setValidInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function onKeyChange(e) {
    setInputValue(e.target.value);
    onInputChange(e);
  }

  useEffect(() => {
    setErrorMessage(errMsg);
  }, [errMsg]);
  

  function onBlurHandler(e) {
      const isValid = onBlurChange(e);
      setValidInput(isValid);
      setInputFocus(false);
  }

  function onFocusHandler() {
    setInputFocus(true);
  }

  return (
    <StyledInput className='form-group'>
      <div className="form-input">
        <input
          type={type}
          id={inputName}
          name={inputName}
          onChange={(e) => onKeyChange(e)}
          value={inputValue}
          onFocus={(e) => onFocusHandler(e)}
          onBlur={(e) => onBlurHandler(e)}
          autoComplete="off"
          aria-invalid={validInput ? "false" : "true"}
          aria-describedby="uidnote"
          required
        />
        <label htmlFor={inputName} className="label-name">
          <span className='content-name'>{labelName}</span>
        </label>
      </div>
      <span
        className={inputFocus ? `error` : ''}
        id='uidnote'
      >{errorMessage}</span>
    </StyledInput>
  )
}

export default Input;