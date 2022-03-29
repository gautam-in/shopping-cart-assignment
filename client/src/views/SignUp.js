// react
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Notification from '../components/general/Notification';

/**
 * @name SignUp
 * @returns JSX for SignUp Page
 */
const SignUp = () => {
  const navigate = useNavigate();
  // states
  const [notificationData, setNotificationData] = useState({});

  // refs
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  /**
   * @name signUpHandler
   * @description validate user details and then sends data to server
   */
  const signUpHandler = (e) => {
    e.preventDefault();
    let msg = [];

    // input field validations
    if (!/^[a-zA-Z]+$/.test(firstName.current.value)) {
      msg.push('First Name should contain only alphabets');
    }

    if (!/^[a-zA-Z]+$/.test(lastName.current.value)) {
      msg.push('last Name should contain only alphabets');
    }

    if (!/^([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/.test(email.current.value)) {
      msg.push('email is invalid');
    }

    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/.test(password.current.value)) {
      msg.push('password should be alphanumeric and should be of atleast 6 character');
    } else if (!(password.current.value === confirmPassword.current.value)) {
      msg.push('password and current password are not matching');
    }

    // set msg type and error to notification state
    if (msg.length > 0) {
      msg = msg.join(', ') + '.';
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

      <div className="signup">
        <section className="signup__left-section">
          <h1 className="signup__left-section__heading">SignUp</h1>
          <p className="signup__left-section__desc">
            We do not share your personal details with anyone.
          </p>
        </section>

        <section className="signup__right-section">
          <form className="signup__right-section__form">
            <input type="text" ref={firstName} id="fName" name="fName" placeholder="First Name" />
            <label className="signup__right-section__form-label" htmlFor="fName">
              First Name
            </label>
            <input type="text" ref={lastName} id="lName" name="lName" placeholder="Last Name" />
            <label className="signup__right-section__form-label" htmlFor="lName">
              Last Name
            </label>
            <input type="text" ref={email} id="email" name="email" placeholder="Email" />
            <label className="signup__right-section__form-label" htmlFor="email">
              Email
            </label>
            <input
              type="password"
              ref={password}
              id="password"
              name="password"
              placeholder="Password"
            />
            <label className="signup__right-section__form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              ref={confirmPassword}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <label className="signup__right-section__form-label" htmlFor="password">
              Confirm Password
            </label>
            <button className="signup__right-section__form__button" onClick={signUpHandler}>
              SignUp
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
