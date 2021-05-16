import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import { useHistory } from 'react-router-dom';
import '../SigninForm/SigninForm.scss';
const initial = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: ""
}
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
    console.log(value);
    setInputs((prevInput) => ({ ...prevInput, [name]: value }));
  };
  const validate = () => {
    let input = inputs;
    let errors = {};
    let isValid = true;

    if (!input["firstname"]) {
      isValid = false;
      errors["firstname"] = "Please enter your first name!";
    }

    if (typeof input["firstname"] !== "undefined") {
      const re = /^\S*$/;
      if (input["firstname"].length < 6 || !re.test(input["firstname"])) {
        isValid = false;
        errors["firstname"] = "Please enter valid first name!";
      }
    }

    if (!input["lastname"]) {
      isValid = false;
      errors["lastname"] = "Please enter your last name!";
    }

    if (typeof input["lastname"] !== "undefined") {
      const re = /^\S*$/;
      if (input["lastname"].length < 6 || !re.test(input["lastname"])) {
        isValid = false;
        errors["lastname"] = "Please enter valid last name!";
      }
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address!";
    }

    if (typeof input["email"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address!";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password!";
    }

    if (!input["confirmPassword"]) {
      isValid = false;
      errors["confirmPassword"] = "Please enter your confirm password!";
    }

    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 6) {
        isValid = false;
        errors["password"] = "Please use at least 6 charachter!";
      }
    }
    if (typeof input["password"] !== "undefined" && typeof input["confirmPassword"] !== "undefined") {
      if (input["password"] != input["confirmPassword"]) {
        isValid = false;
        errors["password"] = "Passwords don't match!";
      }
    }
    setErrors(errors);
    return isValid;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        name='firstname'
        id='firstname'
        placeholder='First Name'
        value={inputs.firstname}
        onChange={onChangeHandler}
        errorLabel={errors.firstname}
      />
      <Input
        type='text'
        name='lastname'
        id='lastname'
        placeholder='Last Name'
        value={inputs.lastname}
        onChange={onChangeHandler}
        errorLabel={errors.lastname}
      />

      <Input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        value={inputs.email}
        onChange={onChangeHandler}
        errorLabel={errors.email}
      />

      <Input
        type='password'
        name='password'
        id='password'
        placeholder='Password'
        value={inputs.password}
        onChange={onChangeHandler}
        errorLabel={errors.password}
      />

      <Input
        type='password'
        name='confirmPassword'
        id='confirmPassword'
        placeholder='Confirm Password'
        value={inputs.confirmPassword}

        onChange={onChangeHandler}
        errorLabel={errors.confirmPassword}
      />

      <button type='submit' className='form-submit-btn' >
        Signup
      </button>
    </form>
  );
};



export default RegistrationForm;
