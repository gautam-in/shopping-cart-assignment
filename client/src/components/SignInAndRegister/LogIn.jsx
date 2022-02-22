import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./login.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../MainContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

const LogIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { setUser, user } = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const emailValidationHandler = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid Email!!");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(email, password);
    if (emailError.length === 0 && passwordError.length === 0) {
      //   console.log(JSON.parse(sessionStorage.getItem("user")));
      let result = JSON.parse(sessionStorage.getItem("user")).filter((user) => {
        return user.email === email && user.password === password;
      });
      console.log(result);
      if (result.length > 0) {
        navigate("/");
        setUser(result[0]);
      } else {
        setLoginError("User Not Found!!");
      }
    }
  };

  return (
    <Fragment>
      <Container>
        <div className="login_form">
          <Row>
            <Col md={6}>
              <h4>Login</h4>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </Col>
            <Col md={6}>
              <form
                className={classes.root}
                autoComplete="off"
                onSubmit={submitHandler}
              >
                <FormControl>
                  {/* <InputLabel htmlFor="component-simple">Email</InputLabel> */}
                  <TextField
                    id="component-simple"
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setLoginError("");
                    }}
                    error={emailError.length > 0 ? true : false}
                    helperText={emailError}
                    onBlur={emailValidationHandler}
                    required
                  />
                </FormControl>

                <FormControl>
                  {/* <InputLabel htmlFor="component-password">Password</InputLabel> */}
                  <TextField
                    id="component-password"
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setLoginError("");
                    }}
                    required
                  />
                </FormControl>

                <p className="text-danger">{loginError}</p>

                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default LogIn;
