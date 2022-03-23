import { Button, TextField } from "@mui/material";
import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <form className="form" autoComplete="off">
        <TextField
          variant="standard"
          name="firstName"
          type="text"
          label="First Name"
        />
        <TextField
          name="lastName"
          type="text"
          label="Last Name"
          variant="standard"
        />
        <TextField name="email" type="text" label="Email" variant="standard" />
        <TextField
          name="password"
          type="password"
          label="Password"
          variant="standard"
        />
        <TextField
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          variant="standard"
        />
        <Button variant="contained" fullWidth className="my-5">
          Signup
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
