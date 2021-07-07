import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/login.css';

export default function () {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [emailError, setEmailError] = useState('');
  let [passwordError, setPasswordError] = useState('');
  let history = useHistory();

  function validateEmail() {
    const emailFormat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailFormat.test(email)) setEmailError('Please enter valid email');
    else {
      setEmailError('');
      return true;
    }
  }

  function validatePassword() {
    const passwordFormat = /[0-9][A-Z a-z]/;
    if (password.length >= 6) {
      setPasswordError('');
      return true;
    } else setPasswordError('Please enter your password');
  }

  const login = (e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      history.push('/');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommedations</p>
        </div>
        <form onSubmit={login} className="login-form">
          <fieldset className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onBlur={validateEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </fieldset>
          <fieldset className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              required
              onBlur={validatePassword}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </fieldset>
          <input
            value="Login"
            className="login-button maroon-button"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
