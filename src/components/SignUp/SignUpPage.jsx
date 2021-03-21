import React from 'react';
import { TextField } from '@material-ui/core';

import './SignUpPage.scss';

const SignUpPage = (props) => {
  const {
    fields, formActions, onSubmit, onInputChange,
  } = props;
  return (
    <section className="section-signup">
      <div className="signup-info">
        <h2>Signup</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="signup-action">
        <form method="post" action="#" className="login-form" autoComplete="off" onSubmit={(e) => onSubmit(e, { ...fields })}>
          <div className="field-row">
            <TextField
              name="firstName"
              className="signup-inputs"
              id="first-name"
              type="text"
              label="First Name"
              onChange={(e) => onInputChange(e, fields.firstName)}
              value={fields.firstName.value}
            />
            {fields.firstName.error && <span className="error-help">{fields.firstName.error}</span>}
          </div>
          <div className="field-row">
            <TextField
              name="lastName"
              className="signup-inputs"
              id="last-name"
              type="text"
              label="Last Name"
              onChange={(e) => onInputChange(e, fields.lastName)}
              value={fields.lastName.value}
            />
            {fields.lastName.error && <span className="error-help">{fields.lastName.error}</span>}
          </div>
          <div className="field-row">
            <TextField
              name="email"
              className="signup-inputs"
              id="email"
              type="email"
              label="Email"
              onChange={(e) => onInputChange(e, fields.email)}
              value={fields.email.value}
            />
            {fields.email.error && <span className="error-help">{fields.email.error}</span>}
          </div>
          <div className="field-row">
            <TextField
              name="password"
              className="signup-inputs"
              id="password"
              type="password"
              label="Password"
              onChange={(e) => onInputChange(e, fields.password)}
              value={fields.password.value}
            />
            {fields.password.error && <span className="error-help">{fields.password.error}</span>}
          </div>
          <div className="field-row">
            <TextField
              name="confirmPassword"
              className="signup-inputs"
              id="confirm-password"
              type="password"
              label="Confirm Password"
              onChange={(e) => onInputChange(e, fields.confirmPassword, fields)}
              value={fields.confirmPassword.value}
            />
            {fields.confirmPassword.error && <span className="error-help">{fields.confirmPassword.error}</span>}
          </div>
          <button
            type="submit"
            className="btn btn-signup"
            disabled={formActions.isSubmitting || formActions.hasErrors}
          >
            Signup
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
