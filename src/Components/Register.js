import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { makeStyles, TextField, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%"
    },
  },
}));
export default function Register() {
  let formIsValid = true;
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const classes = useStyles();
  const history = useHistory();
  const [errors, seterrors] = useState({});
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [cpass, setcpass] = useState('');

  const clearState = ()=>{
    setfirstName('')
    setlastName('')
    setemail()
    seterrors({})
    setpass()
    setcpass()
}

  const validateForm = () => {
    let errors = {};
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      formIsValid = false;
      errors["fname"] = '*Please enter valid name.';
    }
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      formIsValid = false;
      errors["lname"] = '*Please enter valid name.';
    }
    if (!emailregex.test(email)) {
      formIsValid = false;
      errors["email"] = '*Please enter valid email';
    }
    if((/\s/g).test(pass)){
      formIsValid = false;
      errors["passerr"] = '*Password should not have spaces.';
    }
    if (pass.length < 6) {
      formIsValid = false;
      errors["passlen"] = '*Password should be of 6 characters.';
    }
    if (pass !== cpass) {
      formIsValid = false;
      errors["pmatch"] = '*Password And Confirm Password mismatch.';
    }
    seterrors({ ...errors, errors: errors });
    return formIsValid;
  }

  const register = (e) => {
    e.preventDefault();
    if (validateForm()) {
      clearState();
      history.push('/');
    }
  };
  return (
    <div className="LoginContainer">
      <section>
        <h1 style={{ margin: "1rem 0" }}>Signup</h1>
        <small>We do not share your personal details with anyone</small>
      </section>
      <section>
        <form className={classes.root} autoComplete="on" onSubmit={register}>
          <TextField
            label="First Name"
            required
            onChange={(e) => setfirstName(e.target.value)}
          />
          <div>
            {errors.fname}
          </div>
          <TextField
            label="Last Name"
            required
            onChange={(e) => setlastName(e.target.value)}
          />
          <div>
            {errors.lname}
          </div>
          <TextField
            label="Email"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <div>
            {errors.email}
          </div>
          <TextField
            label="Password"
            type="password"
            required
            onChange={(e) => setpass(e.target.value)}
          />
          <div>
            {errors.passerr}
            {errors.passlen}
          </div>
          <TextField
            label="Confirm Password"
            type="password"
            required
            onChange={(e) => setcpass(e.target.value)}
          />
          <div>
            {errors.pmatch}
          </div>
          <Button variant="contained" color="secondary" type="submit">
            Sign Up
          </Button>
        </form>
      </section>
    </div>
  );
}

