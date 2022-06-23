import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmedPassword: "",
  });
  const [error, setErrors] = useState({
    email: "",
    password: [],
    confirmedPassword: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let passwordErrors = [];
    let passwordMatch = false;

    if (!/[^\w]/.test(formInput.password)) {
      passwordErrors.push("Password should contain a special character");
    }
    if (formInput.password.includes(" ")) {
      passwordErrors.push("Password should not contain spaces");
    }
    if (!/\d/.test(formInput.password)) {
      passwordErrors.push("Password should contain at least one number");
    }
    if (!/[a-zA-Z]/.test(formInput.password)) {
      passwordErrors.push("Password should contain at least one alphabet");
    }
    if (formInput.password.length < 6) {
      passwordErrors.push("Password should contain at least 6 characters");
    }
    if (formInput.password === formInput.confirmedPassword) {
      passwordMatch = true;
    }

    if (passwordErrors.length === 0) {
      navigate("/");
    }

    setErrors({
      ...error,
      password: passwordErrors,
      confirmedPassword: passwordMatch ? "" : "Passwords do not match",
    });
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ ...formInput, [name]: newValue });
  };

  return (
    <>
      <Grid container item>
        <Grid item xs={12} sm={5} sx={{ px: 5 }}>
          <Grid container item justifyContent="start" xs={12} sm={12} md={12}>
            <p className="loginText1">Signup</p>
          </Grid>
          <Grid container item justifyContent="start" xs={12} sm={12} md={12}>
            <p className="loginText2">
              We don't share your personal details with anyone
            </p>
          </Grid>
        </Grid>

        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          sm={7}
          style={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <form onSubmit={handleSubmit}>
            <Grid
              container
              justifyContent="center"
              sx={{ paddingBottom: 1, width: 300 }}
            >
              <TextField
                fullWidth
                required
                label="First name"
                name="firstName"
                value={formInput.firstName}
                helperText="Enter your first name"
                onChange={handleInput}
                variant="standard"
              />
            </Grid>

            <Grid
              container
              justifyContent="center"
              sx={{ paddingBottom: 1, width: 300 }}
            >
              <TextField
                fullWidth
                required
                label="Last name"
                name="lastName"
                value={formInput.lastName}
                helperText="Enter your last name"
                onChange={handleInput}
                variant="standard"
              />
            </Grid>

            <Grid
              container
              justifyContent="center"
              sx={{ paddingBottom: 1, width: 300 }}
            >
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                name="email"
                value={formInput.email}
                helperText="Enter your email"
                onChange={handleInput}
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} sx={{ paddingBottom: 1 }}>
              <TextField
                fullWidth
                required
                label="Password"
                name="password"
                type="password"
                value={formInput.password}
                helperText={
                  <>
                    {error.password.map((item) => (
                      <div key={item} style={{ color: "red" }}>
                        {item}
                      </div>
                    ))}
                  </>
                }
                onChange={handleInput}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sx={{ paddingBottom: 4 }}>
              <TextField
                fullWidth
                required
                label="Confirm password"
                name="confirmedPassword"
                type="password"
                value={formInput.confirmPassword}
                helperText={
                  <>
                    {error.confirmedPassword && (
                      <div style={{ color: "red" }}>
                        {error.confirmedPassword}
                      </div>
                    )}
                  </>
                }
                onChange={handleInput}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <button className="btn_primary max_width_button"> Submit</button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
