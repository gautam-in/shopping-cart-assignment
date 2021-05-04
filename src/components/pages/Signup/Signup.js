import React from 'react';

import SignupForm from '../../molecules/SignupForm';
import '../../../styles/Form.scss';

const Signup = () => {
  return (
    <main className='container'>
      <div className='form-wrapper'>
        <div className='header-wrapper'>
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone.</p>
        </div>
        <SignupForm />
      </div>
    </main>
  );
};

export default Signup;
