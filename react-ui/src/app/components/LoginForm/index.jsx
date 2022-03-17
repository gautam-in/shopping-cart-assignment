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
        {/* <TextField
          fullWidth
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        /> */}
        <Button variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
