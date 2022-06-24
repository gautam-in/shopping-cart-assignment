import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { fetchData } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { BootstrapButton } from "../BootstrapButton";
import "./login.css";

const theme = createTheme();

export default function Login(props) {
  const [passError, setPassError] = useState({});
  const [emailError, setemailError] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    ValidateEmail(data.get("email"));
    verifyPassword(data.get("password"));
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    validUser(data.get("email"), data.get("password"));
  };

  const validUser = async (email, pass) => {
    const { data } = await fetchData("userData");
    for (let item of data) {
      if (item.email === email && item.password === pass) {
        sessionStorage.setItem(
          "Auth",
          JSON.stringify({
            auth: true,
            email: email,
            password: pass,
          })
        );
        props.setIsAuth(true);
        navigate("/home");
      }
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
          message: `Either Email-Id or Password is Invalid
             `,
        });
  };
  const renderErrorMessage = (name) =>
    name === passError.name ? (
      <div className="error">{passError.message}</div>
    ) : (
      name === emailError.name && (
        <div className="error">{emailError.message}</div>
      )
    );

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className="loginLeft">
        <CssBaseline />
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            variant="h5"
            className="loginBanner"
            component="div"
            aria-label="Login"
          >
            Login
          </Typography>
          <Typography
            aria-label="Get access to your Order, Wishlist and Recommendations"
            className="loginLabel"
          >
            Get access to your Order, Wishlist and Recommendations
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          sm={8}
          md={4}
          component={Paper}
          elevation={0}
          square
          marginTop={1}
          className="formGrid"
        >
          <Box aria-label="SignIn form" className="signinForm">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                aria-label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
                color={emailError && emailError?.name ? "error" : "primary"}
              />
              {/* <Typography color="error">
                {emailError && emailError.name && renderErrorMessage("email")}
              </Typography> */}
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
              <BootstrapButton
                disableRipple
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                aria-label="login button"
              >
                Login
              </BootstrapButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
