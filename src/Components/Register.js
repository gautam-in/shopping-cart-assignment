import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));
function Register() {
  const classes = useStyles();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [cnfpwd, setcnfpwd] = useState("");
  const register = (e) => {
    e.preventDefault();
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
          <TextField
            label="Last Name"
            required
            onChange={(e) => setlastName(e.target.value)}
          />
          <TextField
            label="Email"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            required
            onChange={(e) => setpwd(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            required
            onChange={(e) => setcnfpwd(e.target.value)}
          />
          <Button variant="contained" color="secondary" type="submit">
            Sign Up
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Register;
