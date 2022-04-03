import { useState } from 'react';

import FormInput from './../../components/form-input/form-input.component';
import Button, {
  BUTTON_TYPE_CLASSES,
} from './../../components/button/button.component';

import { SignInContainer, ButtonContainer } from './login.styles.jsx';

const defaultFormFields = {
  email: '',
  password: '',
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = async (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <SignInContainer>
      <div>
        <h2>Login</h2>
        <span>Get access to your Orders, Wishlist and Recommendations</span>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="text"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
            Login
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default Login;
