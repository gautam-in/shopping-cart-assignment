import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"


import styles from "./signin.module.css"

function SignIn() {
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
  const { email, password, isLoading, error, success } = signinInfo;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInInfo({ ...signinInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, isLoading, error, success } = signinInfo;
    setSignInInfo({...signinInfo, error : {status: false, message: ""}});

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
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
    // dispatch(userSignIn());
    navigate("/");
  };
  return (
    <div className={styles.signin}>
      <div className={styles.heading}>
        <h1>Login</h1>
        <p>Get access to your Orders, Whishlist and Recommendations</p>
      </div>
      <div className={styles.signinForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={handleChange}
              required
              autoComplete="false"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles['form-group']}>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={handleChange}
              required
              autoComplete="false"
            />
            <label htmlFor="password">Password</label>
          </div>
          {/* show error message */}
          {error.status && (
            <div className={`${styles.error} ${styles['form-group']}`}>{error.message}</div>
          )}
          <button type='submit' className={`${styles.signInBtn} ${styles['form-group']}`}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
