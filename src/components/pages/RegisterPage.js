import React from 'react';
import RegistrationForm from '../molecules/RegistrationForm/RegistrationForm';
const RegisterPage = () => {
    return (
      <main className='container'>
        <section className='form-wrapper'>
          <section className='header-wrapper'>
            <h1>Signup</h1>
            <p>We do not share your personal details with anyone.</p>
          </section>
          <RegistrationForm />
        </section>
      </main>
    );
  };
  
  
  

export default RegisterPage;