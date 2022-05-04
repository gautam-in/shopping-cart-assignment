import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { Body, SignUpContainer } from './register-form.styles';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    console.log('user creation successful');
    resetFormFields();

  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <Body>
        <h2>Signup</h2>
        <p>We donot share any personal details with anyone</p>
      </Body>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='First Name'
          type='text'
          required
          onChange={handleChange}
          name='firstName'
          value={firstName}
        />

        <FormInput
          label='Last Name'
          type='text'
          required
          onChange={handleChange}
          name='lastName'
          value={lastName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default RegisterForm;
