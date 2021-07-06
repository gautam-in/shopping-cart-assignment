import React from "react";
import "./Login.scss";
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
function Login() {
  const classes = useStyles();
  return (
    <div className="LoginContainer">
      <section>
        <h1 style={{ margin: "1rem 0" }}>Login</h1>
        <small>Get access to your Orders, Wishlist and Recommendations</small>
      </section>
      <section>
        <form className={classes.root} noValidate autoComplete="on">
          <TextField id="standard-basic" label="Email" />
          <TextField id="standard-basic" label="Password" type="password" />
          <Button variant="contained" color="secondary">
            Login
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Login;
