import React, { useState } from "react";

import classes from "./Login.css";

const loginField = {
  userEmail: "",
  userPassword: "",
};

const Login = () => {
  const [loginDetails, setLoginDetails] = useState(loginField);

  const onChangeField = (key, val) => {
    const value = val.target.value;

    setLoginDetails(prev => {
      return { ...prev, [key]: value };
    });
  };

  const checkCredentials = () => {
    if (JSON.stringify(loginDetails) === JSON.stringify(loginField)) {
      return null;
    }


    const registeredUser = JSON.parse(localStorage.getItem("registeredUser")) || [];
    if (!registeredUser.length) {
      alert("No user is yet registered");
    }

    const found = registeredUser.some(user => {
      const { userEmail: registererEmail, userPassword: registeredPassword } = user;
      const { userEmail, userPassword } = loginDetails;

      return registererEmail === userEmail && registeredPassword === userPassword;
    });

    setLoginDetails(loginField);

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
          <label htmlFor="userEmail" className={classes.Hidden}>Email</label>
          <input
            id="userEmail"
            type="text"
            placeholder="Email"
            value={loginDetails.userEmail}
            onChange={e => onChangeField("userEmail", e)}
          />
        </div>

        <div>
          <label htmlFor="userPassword" className={classes.Hidden}>Password</label>
          <input
            id="userPassword"
            type="password"
            placeholder="Password"
            value={loginDetails.userPassword}
            onChange={e => onChangeField("userPassword", e)}
          />
        </div>
        
        <div>
          <button type="submit" onClick={() => checkCredentials()} >Login</button>
        </div>

      </div>
    </div>
  )
}

export default Login;
