import React from 'react';
import Menu from './components/Menu';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';

function Login() {
  return (
    <div className="page-container">
      <Menu />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default Login;
