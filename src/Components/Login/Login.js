import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles, TextField, Button } from "@material-ui/core";
import "./Login.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));
export default function Login() {
  const classes = useStyles();
  let formIsValid = true;
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const history = useHistory();
  const [errors, seterrors] = useState({});
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  const clearState = () => {
    setemail();
    seterrors({});
    setpass();
  }

  const validateForm = () => {
    debugger;
    let errors = {};
    if((/\s/g).test(pass)){
      formIsValid = false;
      errors["passerr"] = '*Password should not have spaces.';
    }
    if (pass.length < 6) {
      formIsValid = false;
      errors["passlen"] = '*Password should be of 6 characters.';
    }
    if (!emailregex.test(email)) {
      formIsValid = false;
      errors["email"] = '*Please enter valid email';
    }
    seterrors({ ...errors, errors: errors });
    return formIsValid;
  }

  const onlogin = (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      clearState();
      history.push('/');
    }
  };
  return (
    <div className="LoginContainer">
      <section>
        <h1 style={{ margin: "1rem 0" }}>Login</h1>
        <small>Get access to your Orders, Wishlist and Recommendations</small>
      </section>
      <section>
        <form className={classes.root} autoComplete="on" onSubmit={onlogin}>
          <TextField
            id="standard-basic"
            label="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <div>
            {errors.email}
          </div>
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            required
          />
          <div>
            {errors.passerr}
            {errors.passlen}
          </div>
          <Button variant="contained" color="secondary" type="submit">
            Login
          </Button>
        </form>
      </section>
    </div>
  );
}
