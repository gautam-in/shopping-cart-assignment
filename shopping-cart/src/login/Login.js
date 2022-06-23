import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formInput, setFormInput] = useState({ email: "", password: "" });
  const [error, setErrors] = useState({ email: "", password: [] });

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let passwordErrors = [];
    if (!formInput.email) {
      setErrors({ ...error, email: "Please enter your email" });
    }

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
    if (passwordErrors.length === 0) {
      navigate("/");
    }
    setErrors({ ...error, password: passwordErrors });
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
            <p className="loginText1">Login</p>
          </Grid>
          <Grid container item justifyContent="start" xs={12} sm={12} md={12}>
            <p className="loginText2">
              Get access to your Orders.Wishlist and Recommendations
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
              sx={{ paddingBottom: 2, width: 300 }}
            >
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                id="margin-normal"
                name="email"
                value={formInput.email}
                helperText="Enter your email"
                onChange={handleInput}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sx={{ paddingBottom: 4 }}>
              <TextField
                required
                fullWidth
                label="Password"
                id="margin-normal"
                name="password"
                value={formInput.password}
                defaultValue={formInput.name}
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
            <Grid item xs={12}>
              <button className="btn_primary max_width_button"> Submit</button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
