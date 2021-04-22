import React from 'react';

import Form from './Form';
import './Login.scss';

const Login = () => (
  <div className='page-wrap'>
    <div className='container'>
      <div className='login-main'>
        <div className='login-text-wrap'>
          <div className='login-text-main'>
            <h2>Login</h2>
            <p>Get access to your Orders, Whislist and Recommendations</p>
          </div>
        </div>
        <div className='login-form-wrap'>
          <div className='login-form-main'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
