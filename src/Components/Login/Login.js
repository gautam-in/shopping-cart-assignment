import React, { useState } from "react";
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
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const changeemailhandler = (e) => {
    !ValidateEmail(e.target.value)
      ? seterrormsg("Invalid Email Id")
      : seterrormsg("");
    setemail(e.target.value);
  };
  const changepasswordhandler = (e) => {
    setpassword(e.target.value);
  };
  const onlogin = (e) => {
    e.preventDefault();
    setemail("");
    setpassword("");
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
            onChange={changeemailhandler}
            required
          />
          <div>{errormsg}</div>
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            value={password}
            onChange={changepasswordhandler}
            required
          />
          <Button variant="contained" color="secondary" type="submit">
            Login
          </Button>
        </form>
      </section>
    </div>
  );
}
function ValidateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

export default Login;
