import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import md5 from "md5";

import classes from "./Register.css";

const defaultRegistrationField = {
  firstName: "",
  lastName: "",
  userEmail: "",
  userPassword: "",
  userConfirmPassword: ""
};

const Register = () => {
  const [registrationDetails, setRegistrationDetails] = useState(defaultRegistrationField);

  const onChangeField = (key, val) => {
    const value = val.target.value;

    setRegistrationDetails(prev => {
      return { ...prev, [key]: value };
    });
  };

  const encryptPassword = () => {
    const registrationDetailsWithEncryptedPassword = { ...registrationDetails };
    delete registrationDetailsWithEncryptedPassword.userConfirmPassword;
    registrationDetailsWithEncryptedPassword["userPassword"] = md5(registrationDetails.userPassword);
    return registrationDetailsWithEncryptedPassword;
  }

  const registerUser = () => {
    if (JSON.stringify(registrationDetails) === JSON.stringify(defaultRegistrationField)) {
      return null;
    }

    if (registrationDetails.userPassword !== registrationDetails.userConfirmPassword) {
      return null;
    }

    const existingUser = JSON.parse(localStorage.getItem("registeredUser")) || [];

    // password encryption
    existingUser.push(encryptPassword());

    localStorage.setItem("registeredUser", JSON.stringify(existingUser));
    setRegistrationDetails(defaultRegistrationField);
    alert("User registered successfully!!");
  };

  return (
    <div className={classes.RegisterWrapper}>
      <div className={classes.RegisterDescription}>
        <h2>SignUp</h2>
        <span>We do not share your personal details with anyone.</span>
      </div>

      <div className={classes.RegisterForm}>
        <div>
          <TextField id="firstName" label="First name"
            value={registrationDetails.firstName}
            onChange={e => onChangeField("firstName", e)}
            required={true}
          />
        </div>

        <div>
          <TextField id="lastName" label="Last name"
            value={registrationDetails.lastName}
            onChange={e => onChangeField("lastName", e)}
            required={true}
          />
        </div>

        <div>
          <TextField id="userEmail" label="Email"
            value={registrationDetails.userEmail}
            onChange={e => onChangeField("userEmail", e)}
            required={true}
          />
        </div>

        <div>
          <TextField id="userPassword" label="Password"
            value={registrationDetails.userPassword}
            onChange={e => onChangeField("userPassword", e)}
            type="password"
            required={true}
          />
        </div>

        <div>
          <TextField id="userConfirmPassword" label="Confirm Password"
            value={registrationDetails.userConfirmPassword}
            onChange={e => onChangeField("userConfirmPassword", e)}
            type="password"
            required={true}
          />
        </div>
        
        <div>
          <Button variant="contained" color="secondary"
            onClick={() => registerUser()}
          >
            Sign Up
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Register;
