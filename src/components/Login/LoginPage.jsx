import React from 'react';

import './LoginPage.scss';
import FloatingInput from '../Shared/FloatingInput';

const LoginPage = (props) => {
  const {
    fields, formActions, onSubmit, onInputChange,
  } = props;
  return (
    <section className="section-login">
      <div className="login-info">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="login-action">
        <form method="post" action="#" className="login-form" autoComplete="off" onSubmit={(e) => onSubmit(e, { ...fields })}>
          <div className="field-row">
            <FloatingInput
              name="email"
              onChange={(e) => onInputChange(e, fields.email)}
              value={fields.email.value}
              className="login-inputs"
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
              className="login-inputs"
              id="password"
              type="password"
              label="Password"
              error={fields.password.error}
            />
          </div>
          <div className="field-row">
            <button
              type="submit"
              className="btn btn-login"
              disabled={formActions.isSubmitting || formActions.hasErrors}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
