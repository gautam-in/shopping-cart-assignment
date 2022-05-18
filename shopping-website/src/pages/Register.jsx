import { Formik } from "formik";
import React from "react";
import Input from "../components/form/Input";
import "./Register.scss";
import * as Yup from "yup";

const Register = () => {

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validations = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("password is required")
      .matches(
        passwordRegex,
        "password must contain one number,one letter,without spaces and minimum 6 characters long"
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <section className="registerContainer">
      <div className="registerDesc">
        <h1 style={{ fontWeight: "bold" }}>Signup</h1>
        <p className="registerHeading">
          We do not share your personal details with anyone
        </p>
      </div>
      <div className="registerForm">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema = {validations}
          onSubmit={(values) => {
              console.log('here');
            console.log(values);
          }}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                onError={errors.firstName && touched.firstName && errors.firstName}
              />
              <Input
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                onError={errors.lastName && touched.lastName && errors.lastName}
              />
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onError={errors.email && touched.email && errors.email}
              />
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                onError={errors.password && touched.password && errors.password}
              />
              <Input
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                onError={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
              />
              <button type="submit" className="submitButton">
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Register
          </p>
        </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Register;
