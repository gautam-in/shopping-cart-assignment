import React, { useState } from 'react'

import { StyledInput } from './Input.styled';

const Input = ({ inputName, inputValue, labelName, type, errMsg, onInputChange, onKeyInputPress }) => {

  const [validInput, setValidInput] = useState();
  const [inputFocus, setInputFocus] = useState(false);

  function onInptChange(e) {
      const isValid = onInputChange(e);
      setValidInput(isValid);
  }

  function onBlurHandler(e) {
      setInputFocus(false);
  }

  function onFocusHandler(e) {
    setInputFocus(true);
  }

  return (
    <StyledInput className='form-group'>
      <div className="form-input">
        <input
          type={type}
          id={inputName}
          name={inputName}
          onChange={(e) => {onInptChange(e);}}
          value={inputValue}
          onKeyPress={onKeyInputPress}
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
      >{errMsg}</span>
    </StyledInput>
  )
}

export default Input;