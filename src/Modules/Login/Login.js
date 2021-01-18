import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import md5 from "md5";

import classes from "./Login.css";

const defaultLoginField = {
  userEmail: "",
  userPassword: "",
};

const Login = () => {
  const [loginDetails, setLoginDetails] = useState(defaultLoginField);

  const onChangeField = (key, val) => {
    const value = val.target.value;

    setLoginDetails(prev => {
      return { ...prev, [key]: value };
    });
  };

  const checkCredentials = () => {
    if (JSON.stringify(loginDetails) === JSON.stringify(defaultLoginField)) {
      return null;
    }


    const registeredUser = JSON.parse(localStorage.getItem("registeredUser")) || [];
    if (!registeredUser.length) {
      alert("No user is yet registered");
    }

    const found = registeredUser.some(user => {
      const { userEmail: registererEmail, userPassword: registeredPassword } = user;
      const { userEmail, userPassword } = loginDetails;

      return registererEmail === userEmail && registeredPassword === md5(userPassword);
    });

    setLoginDetails(defaultLoginField);

    if (found) {
      alert("Login is successful");
      return;
    }
    
    alert("Login is unsuccessful");
  };

  return (
    <div className={classes.LoginWrapper}>
      <div className={classes.LoginDescription}>
        <h2>Login</h2>
        <span>Get access to your Orders. Wishlist and Recommendations.</span>
      </div>

      <div className={classes.LoginForm}>
        <div>
          
          <TextField id="userEmail" label="Email"
            value={loginDetails.userEmail}
            onChange={e => onChangeField("userEmail", e)}
            required={true}
          />
        </div>

        <div>
          <TextField id="userPassword" label="Password"
            value={loginDetails.userPassword}
            onChange={e => onChangeField("userPassword", e)}
            type="password"
            required={true}
          />
        </div>

        <div>
          <Button variant="contained" color="secondary"
            onClick={() => checkCredentials()}
          >
            Login
          </Button>
        </div>

      </div>
    </div>
  )
}

export default Login;
