

import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core/';
import './style.css';


export default function Register(){
    return (
    <div>
<Grid container spacing={3} className="mt-5">
      <Grid item lg={3}  xs={12}></Grid>
      <Grid item lg={3} xs={12}>
        <h5 className="mb-3 signup-title">
        <i class="fas fa-cloud"></i>Sign Up</h5>
        <h6 className="signup-subtitle">We donot share your personal details with anyone.</h6>
      </Grid>
      <Grid item lg={3}  xs={12} className="signup-margin">
        <form noValidate autoComplete="off">
        <TextField id="standard" label="First Name" fullWidth={true} />
        <TextField className="mt-3" 
         variant="standard" 
         color="primary"
         id="standard-basic" 
         label="Last Name" fullWidth={true}
        />
          <TextField className="mt-3" id="standard-basic" label="Email" fullWidth={true} />
          <TextField className="mt-3" id="standard-basic" label="Password" fullWidth={true} />
          <TextField className="mt-3"id="standard-basic" label="Confirm Password" fullWidth={true} />
          <Button className="mt-4" variant="contained" color="secondary" fullWidth={true}>Login</Button>
        </form>
      </Grid>
      <Grid item lg={3} xs={12}></Grid>


      <Grid className="register-footer-bg-color" lg={1} item xs={12}></Grid>
      <Grid className="register-footer-bg-color" lg={5} item xs={12}>
        <h6 className="register-footer-title" >
        Copyright  2011 - 2018 Sabka Bazar Groceries Supplies Pvt Ltd
        </h6>
         
      </Grid>
      <Grid className="register-footer-bg-color" lg={6} item xs={12}></Grid>
    </Grid>
    </div>
    )
}