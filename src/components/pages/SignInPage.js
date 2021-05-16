import React from 'react';
import '../molecules/SigninForm/SigninForm.scss';
import SignInForm from '../molecules/SigninForm/SigninForm';
const SignInPage =()=>{
    return (<main className='container'>
    <section className='form-wrapper'>
      <section className='header-wrapper'>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </section>
      <SignInForm />
    </section>
  </main>)
}

export default SignInPage;