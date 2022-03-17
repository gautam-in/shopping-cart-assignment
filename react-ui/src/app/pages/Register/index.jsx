import { Grid } from "@mui/material";
import React from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <h4>Signup</h4>
        <p>We do not share your personal details with anyone.</p>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <RegisterForm />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
