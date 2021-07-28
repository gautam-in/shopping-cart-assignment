

import React , {useState, useEffect} from 'react';
import { Grid, TextField, Button } from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import './style.css';


export default function Register(){

  const intialValues = { firstName: "", lastName: "",email:"",password: "" , confirmPassword:""};

  const history = useHistory();

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const submit = () => {
    
    console.log(formValues);
    
  };

   //input change handler
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
    
    if (!values.firstName) {
      errors.firstName = "Please enter FirstName";
    } else if (values.firstName.length > 15) {
      errors.firstName = "First name must be less than or equal to 15 characters";
    }

    if (!values.lastName) {
      errors.lastName = "Please enter LastName";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Last name must be less than or equal to 20 characters";
    }
    if (!values.email) {
      errors.email = "Please enter  email";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Please Enter valid email format";
    }
 
    if (!values.password) {
      errors.password = "Please Enter your Password";
    } else if (!regexPassword.test(values.password)) {
      errors.password = "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character";
    }

    else if (!regexPassword.test(values.confirmPassword)) {
      errors.confirmPassword = "Password do not match";
    }
    return errors;
  };




  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      history.push('/login');
    }
  }, [formErrors]);

 

  return (
    <div>
    {Object.keys(formErrors).length === 0 && isSubmitting && (
      <span className="success-msg">Form submitted successfully</span>
    )}

  <div>
      <Grid container spacing={3} className="mt-5">
      <Grid item sm={3} lg={3} md={3} xs={12}></Grid>
      <Grid item sm={3} lg={3} md={3} xs={12}>
        <h5 className="mb-3 signup-title">
        <i class="fas fa-cloud"></i>Sign Up</h5>
        <h6 className="signup-subtitle">We donot share your personal details with anyone.</h6>
      </Grid>
      <Grid item sm={3} lg={3} md={3} xs={12} className="signup-margin">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>

        <div className="form-row">
        <TextField 
        label="First Name" 
        type="text"
        fullWidth={true} 
        name="firstName"
        id="firstName"
        value={formValues.firstName}
        onChange={handleChange}
        className={formErrors.firstName && "input-error"}
        />
        {formErrors.firstName && (
            <span className="error">{formErrors.firstName}</span>
        )}
        </div>

        <div className="form-row">
        <TextField className="mt-3" 
         variant="standard" 
         color="primary"
         label="Last Name" 
         type="text"
         fullWidth={true} 
         name="lastName"
         id="lastName"
         value={formValues.lastName}
         onChange={handleChange}
         className={formErrors.lastName && "input-error"}
        />
         {formErrors.lastName && (
            <span className="error">{formErrors.lastName}</span>
          )}
          </div>

          <div className="form-row">
          <TextField 
            type="email"
            label="Email" 
            fullWidth={true} 
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
           {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
          </div>

          <div className="form-row">
         <TextField 
          className="mt-4" 
            label="Password" 
            fullWidth={true} 
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />
           {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
         </div>
          <div className="form-row">
          <TextField className="mt-3"
          label="Confirm Password" 
          fullWidth={true} 
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          className={formErrors.confirmPassword && "input-error"}
          fullWidth={true} 
          />
           {formErrors.confirmPassword && (
            <span className="error">{formErrors.confirmPassword}</span>
          )}
          </div>
          <div className="form-row">
          <Button type="submit" className="mt-4" variant="contained" color="secondary" fullWidth={true}>Register</Button>
          </div>
        </form>
      </Grid>
      <Grid item sm={3} lg={3} xs={12} md={12}></Grid>
      <Grid className="register-footer-bg-color" sm={1} lg={1}  md={1} item xs={12}></Grid>
      <Grid className="register-footer-bg-color" sm={5} lg={5}  md={5} item xs={12}>
        <h6 className="register-footer-title" >
        Copyright  2011 - 2018 Sabka Bazar Groceries Supplies Pvt Ltd
        </h6>
         
      </Grid>
      <Grid className="register-footer-bg-color" sm={6} md={6}  lg={6} item xs={12}></Grid>
    </Grid>
    </div>
    </div>
    )
}