import React from 'react';

import LoginForm from '../../molecules/LoginForm';
import '../../../styles/Form.scss';

const Login = () => {
  return (
    <main className='container'>
      <section className='form-wrapper'>
        <section className='header-wrapper'>
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
