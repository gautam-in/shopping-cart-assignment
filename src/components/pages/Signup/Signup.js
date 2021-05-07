import React from 'react';

import SignupForm from '../../molecules/SignupForm';
import '../../../styles/Form.scss';

const Signup = () => {
  return (
    <main className='container'>
      <section className='form-wrapper'>
        <section className='header-wrapper'>
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone.</p>
        </section>
        <SignupForm />
      </section>
    </main>
  );
};

export default Signup;
