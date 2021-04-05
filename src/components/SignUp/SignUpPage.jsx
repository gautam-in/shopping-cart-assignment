import React from 'react';

import './SignUpPage.scss';
import FloatingInput from '../Shared/FloatingInput';

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
        <form data-testid="form" method="post" action="#" className="signup-form" autoComplete="off" onSubmit={(e) => onSubmit(e, { ...fields })}>
          <div className="field-row">
            <FloatingInput
              name="firstName"
              onChange={(e) => onInputChange(e, fields.firstName)}
              value={fields.firstName.value}
              className="signup-inputs"
              id="firstName"
              label="First Name"
              error={fields.firstName.error}
            />
          </div>
          <div className="field-row">
            <FloatingInput
              name="lastName"
              onChange={(e) => onInputChange(e, fields.lastName)}
              value={fields.lastName.value}
              className="signup-inputs"
              id="lastName"
              label="Last Name"
              error={fields.lastName.error}
            />
          </div>
          <div className="field-row">
            <FloatingInput
              name="email"
              onChange={(e) => onInputChange(e, fields.email)}
              value={fields.email.value}
              className="signup-inputs"
              id="email"
              type="email"
              label="Email"
              error={fields.email.error}
            />
          </div>
          <div className="field-row">
            <FloatingInput
              name="password"
              onChange={(e) => onInputChange(e, fields.password)}
              value={fields.password.value}
              className="signup-inputs"
              id="password"
              type="password"
              label="Password"
              error={fields.password.error}
            />
          </div>
          <div className="field-row">
            <FloatingInput
              name="confirmPassword"
              onChange={(e) => onInputChange(e, fields.confirmPassword)}
              value={fields.confirmPassword.value}
              className="login-inputs"
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              error={fields.confirmPassword.error}
            />
          </div>
          <div className="field-row">
            <button
              type="submit"
              className="btn btn-signup"
              disabled={formActions.isSubmitting || formActions.hasErrors}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
