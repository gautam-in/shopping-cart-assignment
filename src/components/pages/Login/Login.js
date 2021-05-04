import React from 'react';

import LoginForm from '../../molecules/LoginForm';
import '../../../styles/Form.scss';

const Login = () => {
  return (
    <main className='container'>
      <div className='form-wrapper'>
        <div className='header-wrapper'>
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
