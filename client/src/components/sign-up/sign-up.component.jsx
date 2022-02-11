import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Toast } from 'react-bootstrap';

import './sign-up.styles.scss';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const SignUp = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    try {
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
      history.push('/signin');
    } catch (err) {
      setErrorMessage('Please enter right credentials');
      console.error(err);
    }
  };
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  return (
    <div className="sign-up">
      <div className="sign-up-heading">
        <h2>Register</h2>
        <span>Sign up with your email and password</span>
      </div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
          label="Name"
          handleChange={handleName}
          required
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          handleChange={handleConfirmPassword}
          required
        />
        {errorMessage && (
          <div className="error">
            <div className="rounded">
              <Toast>
                <Toast.Body>{errorMessage}</Toast.Body>
              </Toast>
            </div>
          </div>
        )}
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};
export default withRouter(SignUp);
