import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    email_error: "",
    password_error: "",
    confirm_password_error: "",
    password_match_error: "",
  });
  const [users, setUsers] = useState([]);

  const changeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const emailValidationHandler = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)) {
      setState({
        ...state,
        email_error: "",
      });
    } else {
      setState({
        ...state,
        email_error: "Invalid Email!!",
      });
    }
  };

  const passwordValidationHandler = (value, type) => {
    if (type === "password") {
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value)) {
        setState({
          ...state,
          password_error: "",
        });
      } else {
        setState({
          ...state,
          password_error:
            "Password must be 6 characters long and must contain at least one letter, one numeric digit",
        });
      }
    } else {
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value)) {
        setState({
          ...state,
          confirm_password_error: "",
        });
      } else {
        setState({
          ...state,
          confirm_password_error:
            "Password must be 6 characters long and must contain at least one letter, one numeric digit",
        });
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (state.password !== state.confirmPassword) {
      setState({
        ...state,
        password_match_error: "Password doesn't match",
      });
    } else {
      let value = {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
      };
      setUsers([...users, value]);

      setState({
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        email_error: "",
        password_error: "",
        confirm_password_error: "",
        password_match_error: "",
      });
        navigate("/signin");
    }
  };

  useEffect(() => {
    sessionStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <Container>
        <div className="login_form">
          <Row>
            <Col md={6}>
              <h4>
                <strong>Signup</strong>
              </h4>
              <p>We do not share your personal details with anyone.</p>
            </Col>

            <Col md={6}>
              <form
                className={classes.root}
                autoComplete="off"
                onSubmit={submitHandler}
              >
                <FormControl>
                  <TextField
                    id="component-firstName"
                    name="firstName"
                    type="text"
                    label="First Name"
                    value={state.firstName}
                    onChange={changeHandler}
                    required
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    id="component-lastName"
                    name="lastName"
                    type="text"
                    label="Last Name"
                    value={state.lastName}
                    onChange={changeHandler}
                    required
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    id="component-email"
                    name="email"
                    type="text"
                    label="Email"
                    value={state.email}
                    onChange={changeHandler}
                    error={state.email_error.length > 0 ? true : false}
                    helperText={state.email_error}
                    onBlur={emailValidationHandler}
                    required
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    id="component-password"
                    name="password"
                    type="password"
                    label="Password"
                    value={state.password}
                    onChange={changeHandler}
                    helperText={state.password_error}
                    error={state.password_error.length > 0 ? true : false}
                    onBlur={(event) =>
                      passwordValidationHandler(
                        event.target.value,
                        event.target.name
                      )
                    }
                    required
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    id="component-confirmPassword"
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={state.confirmPassword}
                    onChange={changeHandler}
                    errorText={state.confirm_password_error}
                    helperText={state.confirm_password_error}
                    error={
                      state.confirm_password_error.length > 0 ? true : false
                    }
                    onBlur={(event) =>
                      passwordValidationHandler(
                        event.target.value,
                        event.target.name
                      )
                    }
                    required
                  />
                </FormControl>
                <p className="text-danger">{state.password_match_error}</p>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Register;
