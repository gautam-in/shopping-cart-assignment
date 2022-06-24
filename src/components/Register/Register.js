import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { BootstrapButton } from "../BootstrapButton";
import "./Register.css";

const theme = createTheme();

export default function Register(props) {
  const [passError, setPassError] = useState({});
  const [confPassErr, setConfPassErr] = useState({});
  const [emailError, setemailError] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    ValidateEmail(data.get("email"));
    verifyPassword(data.get("password"));
    verifyconfirmPassword(data.get("password"), data.get("confirmPassword"));
    sessionStorage.setItem(
      "Auth",
      JSON.stringify({
        auth: true,
        email: data.get("email"),
        password: data.get("password"),
      })
    );
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    if (
      passError &&
      !passError.name &&
      confPassErr &&
      !confPassErr.name &&
      emailError &&
      !emailError.name
    ) {
      props.setIsAuth(true);
      navigate("/home");
    }
  };

  const ValidateEmail = (mail) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
      ? setemailError({})
      : setemailError({ name: "email", message: "incorrect email address" });

  const verifyPassword = (pw) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pw)
      ? setPassError({})
      : setPassError({
          name: "password",
          message: `Password Must have a minimum 6 letter 
            number digits, Uppercase/lowercase alphabet 
             and no spaces
             `,
        });
  };

  const verifyconfirmPassword = (pass, confirmpass) =>
    pass !== confirmpass
      ? setConfPassErr({
          name: "confirmPassword",
          message: "Password did not match",
        })
      : setConfPassErr({});

  const renderErrorMessage = (name) => {
    if (name === passError.name) {
      return <div className="error">{passError.message}</div>;
    }

    if (name === confPassErr.name) {
      return <div className="error">{confPassErr.message}</div>;
    }

    if (name === emailError.name) {
      return <div className="error">{emailError.message}</div>;
    }
    return false;
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className="signupLeft">
        <CssBaseline />
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            variant="h5"
            aria-label="Signup"
            component="div"
            className="signupBanner"
          >
            Signup
          </Typography>
          <Grid
            item
            justifyContent="center"
            aria-label="We do not share your personal details with anyone"
          >
            <Typography className="signupLabel">
              We do not share your personal details with anyone
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={10}
          sm={10.5}
          md={4}
          component={Paper}
          elevation={0}
          square
          mt={1}
        >
          <Box aria-label="Sign-Up form" className="signupForm">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                variant="standard"
                aria-label="First Name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="LastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                variant="standard"
                aria-label="Last Name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                variant="standard"
                color={emailError && emailError.name ? "error" : "primary"}
                aria-label="Email"
              />
              <Typography color="error">
                {emailError && emailError.name && renderErrorMessage("email")}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                aria-label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
                color={passError && passError.name ? "error" : "primary"}
              />
              <Typography color="error">
                {passError && passError.name && renderErrorMessage("password")}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                aria-label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                variant="standard"
                color={confPassErr && confPassErr.name ? "error" : "primary"}
              />
              <Typography color="error">
                {confPassErr &&
                  confPassErr.name &&
                  renderErrorMessage("confirmPassword")}
              </Typography>
              <BootstrapButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                aria-label="Signup button"
              >
                Signup
              </BootstrapButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
