import React, { useEffect } from 'react';
import * as Constants from '../../../shared/constants';
import './Input.scss';

const Input = ({ inputData, changeHandler }) => {
  useEffect(() => {
    console.log(inputData);
  }, [inputData]);
  return (
    <section className='input-field'>
      <input
        type={inputData.type}
        name={inputData.name}
        id={inputData.name}
        placeholder={inputData.label}
        onBlur={(e) => changeHandler(e, inputData)}
        aria-invalid={!inputData.valid && inputData.errorMessage !== ''}
        required={inputData.validations.indexOf(Constants.Required) !== -1}
      />
      <label htmlFor={inputData.name}>{inputData.label}</label>
      {!inputData.valid && inputData.errorMessage !== '' && (
        <span className='form-error'>{inputData.errorMessage}</span>
      )}
    </section>
  );
};

export default Input;
