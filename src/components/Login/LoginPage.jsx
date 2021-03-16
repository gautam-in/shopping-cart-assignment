import React from 'react';
import { TextField } from '@material-ui/core';
import './LoginPage.scss';

const LoginPage = (props) => {
  const { fields, formActions, onSubmit, onInputChange } = props;
  return (
    <section className="section-login">
      <div className="login-info">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="login-action">
        <form method="post" action="#" className="login-form" autoComplete="off" onSubmit={(e) => onSubmit(e, {...fields})}>
          <div className="field-row">
            <TextField
              name="email"
              onChange={(e) => onInputChange(e, fields.email)}
              value={fields.email.value}
              className="login-inputs"
              id="email"
              type="email"
              label="Email"
            />
            {fields.email.error && <span className="error-help">{fields.email.error}</span>}
          </div>
          <div className="field-row">
            <TextField
              name="password"
              onChange={(e) => onInputChange(e, fields.password)}
              value={fields.password.value}
              className="login-inputs"
              id="password"
              type="password"
              label="Password"
            />
            {fields.password.error && <span className="error-help">{fields.password.error}</span>}
          </div>
          <button
            type="submit"
            className="btn btn-login"
            disabled={formActions.isSubmitting || formActions.hasErrors}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  )
};

export default LoginPage;
