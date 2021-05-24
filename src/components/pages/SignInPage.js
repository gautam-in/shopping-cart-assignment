import React from 'react';
import '../molecules/SigninForm/SigninForm.scss';
import SignInForm from '../molecules/SigninForm/SigninForm';
import * as Constants from '../../constants';
const SignInPage = () => {
  return (
    <main className='container'>
      <section className='form-wrapper'>
        <section className='header-wrapper'>
          <h1>{Constants.LoginTitle}</h1>
          <p>{Constants.LoginDescription}</p>
        </section>
        <SignInForm />
      </section>
    </main>
  );
};

export default SignInPage;
