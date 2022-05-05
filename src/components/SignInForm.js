import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ redirect, setRedirect] = useState(false); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const stored_mail=sessionStorage.getItem('email');
    const stored_pswd=sessionStorage.getItem('password');
    if (email == stored_mail && password == stored_pswd) {
      sessionStorage.setItem('isLoggedIn', 'true');
      setRedirect(true);
    } else {
      alert('Please enter valid credentials');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <>
      <section className="login-section">
        <section className="login-section-left-side">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <section className="login-section-right-side">
          <section className="form-block">
            <label htmlFor="name">Email</label>
            <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value.trim())} autoFocus />
          </section>
          <section className="form-block">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value.trim())} />
          </section>
          <button className="login-btn" onClick={handleSubmit}>Login</button>
        </section>
      </section>
      {redirect && (<Navigate to='/products' />)}
    </>
  );
}

export default SignInForm;
