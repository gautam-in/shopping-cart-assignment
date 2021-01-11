import React, { useState } from "react";

import classes from "./Register.css";

const registrationField = {
  firstName: "",
  lastName: "",
  userEmail: "",
  userPassword: "",
  userConfirmPassword: ""
};

const Register = () => {
  const [registrationDetails, setRegistrationDetails] = useState(registrationField);

  const onChangeField = (key, val) => {
    const value = val.target.value;

    setRegistrationDetails(prev => {
      return { ...prev, [key]: value };
    });
  };

  const registerUser = () => {
    if (JSON.stringify(registrationDetails) === JSON.stringify(registrationField)) {
      return null;
    }

    const existingUser = JSON.parse(localStorage.getItem("registeredUser")) || [];
    existingUser.push(registrationDetails);
    localStorage.setItem("registeredUser", JSON.stringify(existingUser));
    setRegistrationDetails(registrationField);
  };

  return (
    <div className={classes.RegisterWrapper}>
      <div className={classes.RegisterDescription}>
        <h2>SignUp</h2>
        <span>We do not share your personal details with anyone.</span>
      </div>

      <div className={classes.RegisterForm}>
        <div>
          <label htmlFor="firstName" className={classes.Hidden}>First name</label>
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            value={registrationDetails.firstName}
            onChange={e => onChangeField("firstName", e)}
          />
        </div>

        <div>
          <label htmlFor="lastName" className={classes.Hidden}>Last name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            value={registrationDetails.lastName}
            onChange={e => onChangeField("lastName", e)}
          />
        </div>

        <div>
          <label htmlFor="userEmail" className={classes.Hidden} aria-hidden="true">Email address</label>
          <input
            id="userEmail"
            type="email"
            placeholder="Enter email"
            value={registrationDetails.userEmail}
            onChange={e => onChangeField("userEmail", e)}
          />
        </div>

        <div>
          <label htmlFor="userPassword" className={classes.Hidden}>Password</label>
          <input
            id="userPassword"
            type="password"
            placeholder="Enter password"
            value={registrationDetails.userPassword}
            onChange={e => onChangeField("userPassword", e)}
          />
        </div>

        <div>
          <label htmlFor="userConfirmPassword" className={classes.Hidden}>Confirm Password</label>
          <input
            id="userConfirmPassword"
            type="password"
            placeholder="Enter confirm password"
            value={registrationDetails.userConfirmPassword}
            onChange={e => onChangeField("userConfirmPassword", e)}
          />
        </div>
        
        <div>
          <button type="submit" onClick={() => registerUser()}>Sign Up</button>
        </div>

      </div>
    </div>
  );
};

export default Register;
