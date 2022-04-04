import { useState } from 'react';

import FormInput from './../../components/form-input/form-input.component';
import Button, {
  BUTTON_TYPE_CLASSES,
} from './../../components/button/button.component';

import { SignUpContainer } from './register.styles';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const handleChange = async (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      'handleSubmit triggered',
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
  };

  return (
    <SignUpContainer>
      <div>
        <h2>Signup</h2>
        <span>We don't share your personal details with anyone.</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          required
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <FormInput
          label="Last Name"
          type="text"
          required
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default Register;
