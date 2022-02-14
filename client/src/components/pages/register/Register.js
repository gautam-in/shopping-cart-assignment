import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"


import styles from "./register.module.css"

function Register() {
  const [singupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    consfirmPassword: "",
    isLoading: false,
    error: {
      status: false,
      message: ""
    },
    success: false
  });
  const navigate = useNavigate();
  const { firstName, lastName, email, password, confirmPassword, isLoading, error, success } = singupInfo;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupInfo({ ...singupInfo, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, isLoading, error, success } = singupInfo;
    setSignupInfo({...singupInfo, error : {status: false, message: ""}});

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setSignupInfo({...singupInfo, error : {status: true, message: "Invalid Email!"}});
      return false;
    }

    if (password !== confirmPassword) {
      setSignupInfo({...singupInfo, error : {status: true, message: "Confirm password does not match with password"}});
      return false;
    }

    const savedUserCredentials = JSON.parse(
      localStorage.getItem("userCredentials")
    );

    if (savedUserCredentials && email === savedUserCredentials.email) {
      setSignupInfo({...singupInfo, error : {status: true, message: "User already registered"}});
      return false;
    }
    
    localStorage.setItem(
      "userCredentials",
      JSON.stringify({ firstName, lastName, email, password })
    );
    navigate("/");
  };
  return (
    <div className={styles.register}>
      <div className={styles.heading}>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className={styles.signupForm}>
        <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className={styles['form-group']}>
            <input
              type='text'
              name='lastName'
              id='lastName'
              value={lastName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className={styles['form-group']}>
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
          <div className={styles['form-group']}>
            <input
              type='password'
              name='password'
              id='password'
              pattern="(?=.*\d)(?=.*[a-z]).{6,}" 
              title="Must contain at least one number and letter, and at least 6 or more characters, and cannot have spaces"
              value={password}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className={styles['form-group']}>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          {/* show error message */}
          {error.status && (
            <div className={`${styles.error} ${styles['form-group']}`} aria-live="polite">{error.message}</div>
          )}
          <button type='submit' className={`${styles.signupBtn} ${styles['form-group']}`}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
