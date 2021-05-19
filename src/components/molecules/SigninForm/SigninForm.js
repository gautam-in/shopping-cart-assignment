import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import './SigninForm.scss';
import { useHistory } from 'react-router-dom';
const initial = {
  email: "",
  password: ""
}
const SigninForm = () => {
  const [inputs, setInputs] = useState(initial);
  const [errors, setErrors] = useState(initial);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      resetForm();
      history.push('/home')
    }

  };
  function resetForm() {
    setErrors(initial);
    setInputs(initial);
  }
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setInputs((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const validate = () => {
    let inputForm = inputs;
    let errorForm = {};
    let isValid = true;
    if (!inputForm["email"]) {
      isValid = false;
      errorForm["email"] = "Please enter your email Address.";
    }
    if (typeof inputForm["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(inputForm["email"])) {
        isValid = false;
        errorForm["email"] = "Please enter valid email address.";
      }
    }
    if (!inputForm["password"]) {
      isValid = false;
      errorForm["password"] = "Please enter your password.";
    }
    setErrors(errorForm);
    return isValid;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        value={inputs.email}
        autoFocus
        required
        onChange={onChangeHandler}
        errorLabel={errors.email}
        aria-label="Email Input"
      />
      <Input
        type='password'
        name='password'
        id='password'
        values={inputs.password}
        placeholder='Password'
        required
        onChange={onChangeHandler}
        errorLabel={errors.password}
        aria-label="Password Input"
      />
      <button type='submit' className='custom-button form-submit-btn' >
        Login
      </button>
    </form>
  );
};



export default SigninForm;
