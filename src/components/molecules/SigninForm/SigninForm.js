import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import './SigninForm.scss';
import * as Constants from '../../../shared/constants';
import { useHistory } from 'react-router-dom';
const initial = {
  email: '',
  password: ''
};
const SigninForm = () => {
  const [inputs, setInputs] = useState(initial);
  const [errors, setErrors] = useState(initial);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      resetForm();
      history.push('/home');
    }
  };
  function resetForm() {
    setErrors(initial);
    setInputs(initial);
  }
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const validate = () => {
    let inputForm = inputs;
    let errorForm = {};
    let isValid = true;
    if (!inputForm['email']) {
      isValid = false;
      errorForm['email'] = Constants.FieldRequired;
    }
    if (inputForm['email']) {
      var pattern = new RegExp(Constants.EmailRegex);
      if (!pattern.test(inputForm['email'])) {
        isValid = false;
        errorForm['email'] = Constants.EmailValid;
      }
    }
    if (!inputForm['password']) {
      isValid = false;
      errorForm['password'] = Constants.FieldRequired;
    }
    setErrors(errorForm);
    return isValid;
  };
  return (
    <form onSubmit={handleSubmit} method='post'>
      <Input
        type='text'
        name='email'
        id='email'
        placeholder='Email'
        value={inputs.email}
        autoFocus
        onChange={onChangeHandler}
        errorLabel={errors.email}
        aria-label='Email Input'
      />
      <Input
        type='password'
        name='password'
        id='password'
        values={inputs.password}
        placeholder='Password'
        onChange={onChangeHandler}
        errorLabel={errors.password}
        aria-label='Password Input'
      />
      <button type='submit' className='custom-button form-submit-btn'>
        Login
      </button>
    </form>
  );
};

export default SigninForm;
