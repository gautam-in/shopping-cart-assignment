import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function () {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [firstName, setFirstName] = useState('');
  let [lastname, setLastName] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');

  let [emailError, setEmailError] = useState('');
  let [passwordError, setPasswordError] = useState('');
  let [cPasswordError, setCPasswordError] = useState(false);

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

  const signup = (e) => {
    e.preventDefault();
    if (!validateEmail() && !validatePassword()) {
      return;
    }
    if (confirmPassword != password) {
      setCPasswordError(true);
      return;
    }
    history.push('/');
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>SignUp</h1>
          <p>We do not share your personal details with anyone.</p>
        </div>
        <form onSubmit={signup} className="login-form">
          <fieldset className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </fieldset>
          <fieldset className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </fieldset>
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
          <fieldset className="input-field">
            <label htmlFor="cPassword">Confirm Password</label>
            <input
              type="password"
              id="cPassword"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {cPasswordError && (
              <p className="error-message">
                Confirm Password and Password should match!
              </p>
            )}
          </fieldset>
          <input
            value="Register"
            className="login-button maroon-button"
            type="submit"
          />
        </form>
      </div>
      <div className="footer">
        <p>Copyrigth &copy; 2011-2018 Sabka Bazar Groceries Supplies Pvt Ltd</p>
      </div>
    </div>
  );
}
