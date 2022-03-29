// react
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Notification from '../components/general/Notification';

/**
 * @name Login
 * @returns JSX for Login Page
 */
const Login = () => {
  const navigate = useNavigate();

  // states
  const [notificationData, setNotificationData] = useState({});

  // refs
  const email = useRef();
  const password = useRef();

  /**
   * @name loginHandler
   * @description login user and navigate user to Home page
   */
  const loginHandler = (e) => {
    e.preventDefault();
    let msg = [];

    // input field validations
    if (!/^([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/.test(email.current.value)) {
      msg.push('Email is invalid');
    }

    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/.test(password.current.value)) {
      msg.push('password is incorrect');
    }

    // set msg type and error to notification state
    if (msg.length > 0) {
      msg = msg.join(' and ') + '.';
      // to convert first character of string to upper case
      msg = msg.charAt(0).toUpperCase() + msg.slice(1);
      setNotificationData({ msg: msg, type: 'error' });
    } else {
      navigate('/home');
    }
  };

  return (
    <main>
      {Object.keys(notificationData).length > 0 && (
        <Notification msg={notificationData.msg} type={notificationData.type} />
      )}
      <div className="login">
        <section className="login__left-section">
          <h1 className="login__left-section__heading">Login</h1>
          <p className="login__left-section__desc">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </section>
        <section className="login__right-section">
          <form className="login__right-section__form">
            <input ref={email} type="text" id="email" name="email" placeholder="Email" />
            <label className="login__right-section__form-label" htmlFor="email">
              Email
            </label>
            <input
              ref={password}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <label className="login__right-section__form-label" htmlFor="password">
              Password
            </label>
            <button className="login__right-section__form__button" onClick={loginHandler}>
              Login
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
