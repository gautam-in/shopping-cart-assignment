import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router";
import './Form.scss';

export default function SignUpForm() {
  const history = useHistory()
  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  return (
    <Formik
      initialValues={initialData}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required('First Name is required'),
        lastName: Yup.string()
          .required('Last Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={(values,{resetForm}) => {
        let users = JSON.parse(localStorage.getItem("user"));
        users = users ? users : [];
        const userExists = users.find(user => values.email.toUpperCase() === user.email.toUpperCase())
        if (userExists) {
          alert("User Alerady exists");
          resetForm()
        }
        else {
          localStorage.setItem("user", JSON.stringify([...users, values]));
          history.push("/login");
        }
      }}
    >
      {({ errors, status, touched }) => (
        <Form style={{ width: "80%", boxSizing: "border-box", display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <div className="form-group">
            <Field name="firstName" type="text" placeholder="First Name"
              label="First Name"
              className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <Field name="lastName" type="text" placeholder="Last Name"
              label="Last Name"
              className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <Field name="email" type="text" placeholder="Email Address"
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
          <div className="form-group">
            <Field name="confirmPassword" type="password" placeholder="Connfirm Password"
              label="Confirm Password"
              className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">SignUp</button>
          </div>
        </Form>
      )}
    </Formik>
  )

}