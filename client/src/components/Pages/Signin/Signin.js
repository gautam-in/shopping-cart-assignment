import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./Signin.css"

export default function SignIn() {
  const [signinInfo, setSignInInfo] = useState({
    email: "",
    password: "",
    isLoading: false,
    error: {
      status: false,
      message: ""
    },
    success: false
  });
  const navigate = useNavigate();
  const { email, password, error } = signinInfo;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInInfo({ ...signinInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = signinInfo;
    setSignInInfo({...signinInfo, error : {status: false, message: ""}});

    if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setSignInInfo({...signinInfo, error : {status: true, message: "Invalid Email!"}});
      return false;
    }

    const savedUserCredentials = JSON.parse(
      localStorage.getItem("userCredentials")
    );
    if (
      savedUserCredentials &&
      (savedUserCredentials.email !== email ||
        savedUserCredentials.password !== password)
    ) {
      setSignInInfo({...signinInfo, error : {status: true, message: "Invalid credentials!"}});
      return;
    }
    navigate("/");
  };
  return (
    <div className="signin">
      <div className="heading">
        <h1>Login</h1>
        <p>Get access to your Orders, Whishlist and Recommendations</p>
      </div>
      <div className="signinForm">
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="password">Password</label>
          </div>
          {/* show error message */}
          {error.status && (
            <div className="error form-group" aria-live="polite">{error.message}</div>
          )}
        <button type='submit' className="signInBtn form-group">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};