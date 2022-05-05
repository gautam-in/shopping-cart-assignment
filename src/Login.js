import React from 'react';
import Menu from './components/Menu';
import SignInForm from './components/SignInForm';
import Footer from './components/Footer';

function Login() {
  return (
    <div className="page-container">
      <Menu />
      <SignInForm />
      <Footer />
    </div>
  );
}

export default Login;
