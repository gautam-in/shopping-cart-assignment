import React from 'react';
import RegistrationForm from '../molecules/RegistrationForm/RegistrationForm';
import * as Constants from '../../shared/constants';
const RegisterPage = () => {
  return (
    <main className='container'>
      <section className='form-wrapper'>
        <section className='header-wrapper'>
          <h1>{Constants.RegisterTitle}</h1>
          <p>{Constants.RegisterDescription}</p>
        </section>
        <RegistrationForm />
      </section>
    </main>
  );
};

export default RegisterPage;
