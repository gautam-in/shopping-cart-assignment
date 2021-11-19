import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    const { value, name } = e.target;

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
    //console.log(inputs)
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }
  const validate = (inputs) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputs.firstname) {
      errors.firstname = "First name is required";
    }
    if (!inputs.lastname) {
      errors.lastname = "Last name is required";
    }
    if (!inputs.email) {
      errors.email = "Email is required";
    } else if (!regex.test(inputs.email)) {
      errors.email = "Email is not proper";
    }
    if (!inputs.password) {
      errors.password = "Password is required";
    } else if (inputs.password.length < 4) {
      errors.password = "Password should be more than 4 characters";
    } else if (inputs.password.length > 16) {
      errors.password = "Password should not be more than 16 characters";
    }
    if (!inputs.password2) {
      errors.password2 = "Please confirm your password";
    } else if (inputs.password2.trim() !== inputs.password.trim()) {
      errors.password2 = "Passwords do not match";
    }
    return errors;
  };

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    clearForm,
    validate
  };
}