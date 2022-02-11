import React, { useState } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
    setErrorMessage('');
    history.push('/products');
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <div className="sign-in">
      <div className="sign-in-heading">
        <h2>Login</h2>
        <span>Get access to your Orders, Wishlist and Recommendations</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleEmail}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          handleChange={handlePassword}
          required
        />
        <div className="error">{errorMessage}</div>
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
        </div>
      </form>
    </div>
  );
};
export default withRouter(SignIn);
