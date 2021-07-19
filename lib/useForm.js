import { useState } from 'react';
import {
  validateEmail,
  validateEmailAndPassword,
  validatePassword,
} from './validators';

export default function useForm(initialProps = {}) {
  const [inputs, setInputs] = useState(initialProps);
  const [errors, setErrors] = useState(null);

  function handleChange(e) {
    // do validations
    // email validations
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function signinSubmit(e) {
    e.preventDefault();
    if (errors) {
      setErrors(null);
    }
    const message = validateEmailAndPassword(inputs.email, inputs.password);
    setErrors(message);
  }
  function registerSubmit(e) {
    e.preventDefault();
    if (errors) {
      setErrors(null);
    }
  }

  return {
    inputs,
    handleChange,
    errors,
    signinSubmit,
    registerSubmit,
  };
}
