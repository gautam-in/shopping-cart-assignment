import React from "react";
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
  return (
    <div className="LoginContainer">
      <section>
        <h1>Signup</h1>
        <small>We do not share your personal details with anyone</small>
      </section>
      <section>
        <form className={classes.root} noValidate autoComplete="on">
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <TextField label="Email" />
          <TextField label="Password" type="password" />
          <TextField label="Confirm Password" type="password" />
          <Button variant="contained" color="secondary">
            Login
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Register;
