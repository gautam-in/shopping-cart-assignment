import { Button, TextField } from "@mui/material";
import React from "react";

export const LoginForm = () => {
  return (
    <div>
      <form className="form">
        <TextField name="email" type="text" label="Email" variant="standard" />
        <TextField
          name="password"
          type="password"
          label="Password"
          variant="standard"
        />
        <Button variant="contained" fullWidth className="my-5">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
