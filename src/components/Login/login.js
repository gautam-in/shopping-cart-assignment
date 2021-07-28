import React , {useState, useEffect} from 'react';
import { Grid, TextField, Button } from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import './style.css';



export default function Login() {

  const history = useHistory();

  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    
    console.log(formValues);

    history.push('/productsList')
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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;

    if (!values.email) {
      errors.email = "Please enter  email";
    } else if (!regex.test(values.email)) {
      errors.email = "Please Enter valid email format";
    }
 
    if (!values.password) {
      errors.password = "Please Enter your Password";
    } else if (!regexPassword.test(values.password)) {
      errors.password = "Password must contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

 
  return (
    <div>
  
    {Object.keys(formErrors).length === 0 && isSubmitting && (
      <span className="success-msg">Form submitted successfully</span>
    )}

    <Grid container className="mt-5">
      <Grid item sm={3} md={3} lg={3} xs={12}></Grid>
      <Grid item sm={3}  md={3} lg={3} xs={12}>
        <h5 className="mb-3 login-title">
        <i class="fas fa-cloud"></i>Login</h5>
        <h6 className="login-subtitle">Get access to get your Orders,Wishlist and Recomendations</h6>
      </Grid>
      <Grid item sm={3} md={3} lg={3} xs={9} className="login-margin">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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

          <Button type="submit" className="mt-5 mb-5" variant="contained" color="secondary" fullWidth={true}>Login</Button>
        </form>
      </Grid>
      <Grid item sm={3} md={3} lg={3} xs={8}></Grid>


      <Grid className="footer-bg-color" md={1} sm={1} lg={1} item xs={12}></Grid>
      <Grid className="footer-bg-color" md={5} sm={5} lg={5} item xs={12}>
        <h6 className="footer-title">
        Copyright  2011 - 2018 Sabka Bazar Groceries Supplies Pvt Ltd
        
        </h6>
         
      </Grid>
      <Grid className="footer-bg-color" item sm={6} md={6} lg={6} xs={12}></Grid>
    </Grid>
    </div>


  )

}