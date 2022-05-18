import { Formik } from "formik";
import React from "react";
import Input from "../components/form/Input";
import "./Register.scss";
import "./SignIn.scss"
import * as Yup from "yup";

const SignIn = () => {

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validations = Yup.object({
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("password is required")
      .matches(
        passwordRegex,
        "password must contain one number,one letter,without spaces and minimum 6 characters long"
      )
  });

  return (
    <section className="registerContainer">
      <div className="registerDesc">
        <h1 style={{ fontWeight: "bold" }}>Login</h1>
        <p className="registerHeading">
          Get Access to your Orders, Wishlist and Recommendations
        </p>
      </div>
      <div className="loginForm">
        <Formik
          initialValues={{
            email: "",
            password: "",
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
              <button type="submit" className="submitButton">
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Login
          </p>
        </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default SignIn;
