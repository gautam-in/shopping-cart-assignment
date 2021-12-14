import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./sign-up.styles.css";

const SignUp = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      userCredentials;
    setErrorMessage(null);
    setSuccessMessage(null);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorMessage("Invalid Email");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Password do not match");
      return;
    }
    const savedUserCredentials = JSON.parse(
      localStorage.getItem("userCredentials")
    );
    if (savedUserCredentials && email === savedUserCredentials.email) {
      setErrorMessage("User already registered");
      return;
    }
    localStorage.setItem(
      "userCredentials",
      JSON.stringify({ firstName, lastName, email, password })
    );
    setSuccessMessage("User successfully registed, Now SignIn");
    setTimeout(() => {
      navigate("/signin");
    }, 3000);
  };

  return (
    <div className='sign-up'>
      <div className='sign-up-title'>
        <h1>Sign Up</h1>
        <p>We do not share your personal details with anyone</p>
      </div>
      <div className='signup-form'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={userCredentials.firstName}
            onChange={handleChange}
            placeholder='First Name'
            required
          />
          <input
            type='text'
            name='lastName'
            id='lastName'
            value={userCredentials.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            required
          />
          <input
            type='email'
            name='email'
            id='email'
            value={userCredentials.email}
            onChange={handleChange}
            placeholder='Email'
            required
          />
          <input
            type='password'
            name='password'
            id='password'
            value={userCredentials.password}
            onChange={handleChange}
            placeholder='Password'
            required
          />
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            value={userCredentials.confirmPassword}
            onChange={handleChange}
            placeholder='Confirm Password'
            required
          />
          {errorMessage && <div className='signup-error'>{errorMessage}</div>}
          {successMessage && (
            <div className='signup-success'>{successMessage}</div>
          )}
          <button type='submit' className='signup-button'>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
