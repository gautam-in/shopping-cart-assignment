import './SignUp.css'
import {Formik, Form} from "formik";
import {TextField} from "../components/TextField.js"
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate();
  const validate=Yup.object({
      firstname:Yup.string()
      .max(10,"Must be 10 characters or less")
      .required("First Name is Required"),
      lastname:Yup.string()
      .max(15,"Must be 15 characters or less")
      .required("Last Name isRequired"),
      email:Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
      password:Yup.string()
      .min(5, "password must be atleast six characters")
      .required("Password is Required"),
      confirmPassword:Yup.string()
      .oneOf([Yup.ref("password"),null],"password must match")
      .required("Password is Required")
      .required("Confirm Password is Required"),
  })

  return (<>
    <div className="container mt-3">
        <div className="row">
            <div className="offset-1 col-5">
                <strong>Signup</strong>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div className="col-4">
                <Formik
                initialValues={{firstname:"", lastname:"", email:"", password:"", confirmPassword:""}}
                validationSchema={validate}
                onSubmit={values=>{
                    navigate('/products')
                }}
                >
                    {formik=>(
                        <Form>
                        <TextField label="First Name" type="text" name="firstname"/>
                        <TextField label="Last Name" type="text" name="lastname"/>
                        <TextField label="Email" type="email" name="email"/>
                        <TextField label="Password" type="password" name="password"/>
                        <TextField label="Confirm Password" type="password" name="confirmPassword"/>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </Form>
                    )}

                </Formik>

            
            </div>
        </div>
    </div>
    </>
  );
}

export default SignUp;
