import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import * as Constants from '../../../shared/constants';
import { validate } from './Validate';
const Form = (props) => {
  const [input, setInput] = useState({});
  const [valid, setValid] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (valid) {
      props.formSubmit();
    }
  };

  const handleChange = (e, inputData) => {
    const target = e.target;
    const data = { ...input };
    data[target.name] = target.value;
    setInput(data);
    validateForm(inputData, target.value);
  };
  const validateForm = (inputData, value) => {
    if (inputData.validations && inputData.validations.length > 0) {
      inputData.errorMessage = inputData.validations.reduce((cumulativeMessage, checkIf) => {
        const errorMessage =
          inputData.name === Constants.ConfirmPassword
            ? validate(checkIf, value, input.password)
            : validate(checkIf, value);
        return (
          cumulativeMessage +
          (cumulativeMessage !== '' && errorMessage !== '' ? ', ' : '') +
          errorMessage
        );
      }, '');
      inputData.valid = inputData.errorMessage === '' ? true : false;
    } else {
      inputData.errorMessage = '';
      inputData.valid = true;
    }
    setValid(inputData.valid);
  };
  return (
    <form autoComplete='off' onSubmit={handleSubmit} method='post'>
      {props.formInputs.map((inputData, idx) => {
        return (
          <Input key={inputData.name + idx} inputData={inputData} changeHandler={handleChange} />
        );
      })}
      <button type='submit' className='custom-button form-submit-btn'>
        {props.btnText}
      </button>
    </form>
  );
};

export default Form;
