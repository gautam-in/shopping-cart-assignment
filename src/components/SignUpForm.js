import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isValidEmail } from '../utilities';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        if (isValidEmail(email)) {
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('email',email);
          sessionStorage.setItem('password',password);
          setRedirect(true);
        } else {
          alert('Please enter a valid email address');
        }
      } else {
        alert('Password & confirm password has to match');
        setPassword(''); setConfirmPassword('');
      }
    } else {
      alert('Please enter all details and then re-submit');
    }
  }
  return (
    <>
      <section className="register-section">
        <section className="register-section-left-side">
          <h2>Sign up</h2>
          <p>We do not share your personal details with anyone.</p>
        </section>
        <section className="register-section-right-side">
          <section className="form-block">
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="Your first name" onChange={e => setFirstName(e.target.value.trim())} value={firstName} autoFocus id="firstName" />
          </section>
          <section className="form-block">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Your last name" onChange={e => setLastName(e.target.value.trim())} value={lastName} id="lastname" />
          </section>
          <section className="form-block">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Your email-id" onChange={e => setEmail(e.target.value.trim())} value={email} id="email" />
          </section>
          <section className="form-block">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value.trim())} value={password} id="password" />
          </section>
          <section className="form-block">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" placeholder="Re-enter the password" onChange={e => setConfirmPassword(e.target.value.trim())} value={confirmPassword} id="confirmPassword" />
          </section>
          <button className="register-btn" onClick={handleSubmit}>Register</button>
        </section>
      </section>
      {redirect && (<Navigate to='/products' />)}
    </>
  );
}

export default SignUpForm;
