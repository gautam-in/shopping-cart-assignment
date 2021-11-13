import React,{useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./Form.scss";
import { LOGIN } from '../../redux/userSlice';

export default function LoginForm() {
  const history= useHistory()
  const dispatch = useDispatch();
  const initialData = {
    email: '',
    password: '',
    error:''
  }
  const [state, setState] = useState(initialData);
  const loginUser = (user) => {
    return new Promise((resolve, reject) => {
      try {
        let users = JSON.parse(localStorage.getItem("user"));
        if (users === null) {
          reject("Invalid Username or Password");
        } else {
          const userExists = users.find(
            (element) =>
            element.email.toUpperCase() === user.email.toUpperCase() &&
            element.password === user.password
          );
          if (userExists) {
            resolve(userExists);
          } else {
            reject("Invalid Username or Password");
          }
        }
      } catch (error) {
        reject(error.message);
      }
    });
  };
  return (
    <Formik
      initialValues= {initialData}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required')
      })}
      onSubmit={values => {
        console.log(values)
        loginUser(values)
        .then((res)=>{
          alert("Logging In");
          dispatch(LOGIN(res))
          setState((prev) => ({ ...prev, error: '' }));
          history.push("/");
        })
        .catch(err=>{
          setState((prev) => ({ ...prev, error: 'Failed to login:\n'+err }));
        })
      }}
      >
      {({ errors, status, touched }) => (
        <Form style={{width:"80%", boxSizing:"border-box", display: "flex", justifyContent:"center", flexDirection: "column"}}>
          <div className="form-group">
            <Field name="email" type="text"placeholder="Email Address" 
            label="Email Address"  
             className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
            <ErrorMessage name="email" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <Field name="password" type="password" placeholder="Password"                      
            label="Password"  
             className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
            <ErrorMessage name="password" component="div" className="invalid-feedback" />
          </div>
          {state.error && <span role="alert" style={{color:'red'}}>{state.error}</span>}
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">Login</button>
          </div>
        </Form>
      )}
    </Formik>
  )

}