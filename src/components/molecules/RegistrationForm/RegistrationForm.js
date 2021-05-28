import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import { useHistory } from 'react-router-dom';
import '../SigninForm/SigninForm.scss';
import * as Constants from '../../../shared/constants';
const initial = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: ''
};
const RegistrationForm = () => {
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
    let input = inputs;
    let errors = {};
    let isValid = true;

    if (!input['firstname']) {
      isValid = false;
      errors['firstname'] = Constants.FieldRequired;
    }

    if (typeof input['firstname'] !== 'undefined') {
      const re = /^\S$/;
      if (input['firstname'].length < 6 || !re.test(input['firstname'])) {
        isValid = false;
        errors['firstname'] = Constants.FirstNameValid;
      }
    }

    if (!input['lastname']) {
      isValid = false;
      errors['lastname'] = Constants.FieldRequired;
    }

    if (typeof input['lastname'] !== 'undefined') {
      const re = /^\S$/;
      if (input['lastname'].length < 6 || !re.test(input['lastname'])) {
        isValid = false;
        errors['lastname'] = Constants.LastNameValid;
      }
    }

    if (!input['email']) {
      isValid = false;
      errors['email'] = Constants.FieldRequired;
    }

    if (typeof input['email'] !== 'undefined') {
      var pattern = new RegExp(Constants.EmailRegex);
      if (!pattern.test(input['email'])) {
        isValid = false;
        errors['email'] = Constants.EmailValid;
      }
    }

    if (!input['password']) {
      isValid = false;
      errors['password'] = Constants.FieldRequired;
    }

    if (!input['confirmPassword']) {
      isValid = false;
      errors['confirmPassword'] = Constants.FieldRequired;
    }

    if (typeof input['password'] !== 'undefined') {
      var pwdPattern = new RegExp(Constants.PasswordRegex);
      if (!pwdPattern.test(input['password'])) {
        isValid = false;
        errors['password'] = Constants.PasswordValid;
      }
    }
    if (
      typeof input['password'] !== 'undefined' &&
      typeof input['confirmPassword'] !== 'undefined'
    ) {
      if (input['password'] != input['confirmPassword']) {
        isValid = false;
        errors['password'] = Constants.PasswordUnmatch;
      }
    }
    setErrors(errors);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} method='post'>
      <Input
        type='text'
        name='firstname'
        id='firstname'
        placeholder='First Name'
        value={inputs.firstname}
        onChange={onChangeHandler}
        errorLabel={errors.firstname}
        aria-label='First Name Input'
      />
      <Input
        type='text'
        name='lastname'
        id='lastname'
        placeholder='Last Name'
        value={inputs.lastname}
        onChange={onChangeHandler}
        errorLabel={errors.lastname}
        aria-label='Last Name Input'
      />

      <Input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        value={inputs.email}
        onChange={onChangeHandler}
        errorLabel={errors.email}
        aria-label='Email Input'
      />

      <Input
        type='password'
        name='password'
        id='password'
        placeholder='Password'
        value={inputs.password}
        onChange={onChangeHandler}
        errorLabel={errors.password}
        aria-label='Password Input'
      />

      <Input
        type='password'
        name='confirmPassword'
        id='confirmPassword'
        placeholder='Confirm Password'
        value={inputs.confirmPassword}
        aria-label='Confirm Password Input'
        onChange={onChangeHandler}
        errorLabel={errors.confirmPassword}
      />

      <button type='submit' aria-label='Signup Button' className='custom-button form-submit-btn'>
        Signup
      </button>
    </form>
  );
};

export default RegistrationForm;
