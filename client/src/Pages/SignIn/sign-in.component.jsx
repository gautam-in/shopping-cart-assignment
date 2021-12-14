import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userSignIn } from "../../reducer/user/user.actions";

import "./sign-in.styles.css";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    setErrorMessage(null);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorMessage("Invalid Email");
      return;
    }
    const savedUserCredentials = JSON.parse(
      localStorage.getItem("userCredentials")
    );
    if (
      savedUserCredentials &&
      (savedUserCredentials.email !== email ||
        savedUserCredentials.password !== password)
    ) {
      setErrorMessage("Invalid Credentials");
      return;
    }
    dispatch(userSignIn());
    navigate("/");
  };
  return (
    <div className='sign-in'>
      <div className='sign-in-title'>
        <h1>Login</h1>
        <p>Get access to your Orders, Whishlist and Recommendations</p>
      </div>
      <div className='signin-form'>
        <form onSubmit={handleSubmit}>
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
          {errorMessage && <div className='signup-error'>{errorMessage}</div>}
          <button type='submit' className='signin-button'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
