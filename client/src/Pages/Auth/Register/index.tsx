import React from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

import { Button, TextInput } from "../../../Components"

import "./styles.scss"

export const Register = () => {
  const [submitting, setSubmitting] = React.useState(false)
  const navigate = useNavigate()

  const {
    values,
    errors,
    touched,
    isValid,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      fname: Yup.string()
        .required("First name is required")
        .min(3, "First name should be at least 3 characters long"),
      lname: Yup.string()
        .required("Last name is required")
        .min(3, "Last name should be at least 3 characters long"),
      email: Yup.string()
        .required("Email is required")
        .email("Please enter valid email id"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          "Password must contain minimum 6 characters including one number and no spaces"
        ),
      confirmPassword: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
    }),

    onSubmit: (values) => {
      setSubmitting(true)
      setTimeout(() => {
        navigate("/")
      }, 1000)
    },
  })

  return (
    <section id="register" className="register grid">
      <div className="description">
        <h1>Signup</h1>
        <p>We do not share your personal data with anyone.</p>
      </div>

      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            label="First Name"
            name="fname"
            touched={touched.fname}
            errors={errors.fname}
            value={values.fname}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <TextInput
            type="text"
            label="Last Name"
            name="lname"
            touched={touched.lname}
            errors={errors.lname}
            value={values.lname}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <TextInput
            type="email"
            label="Email"
            name="email"
            touched={touched.email}
            errors={errors.email}
            value={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <TextInput
            type="password"
            label="Password"
            name="password"
            touched={touched.password}
            errors={errors.password}
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <TextInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            touched={touched.confirmPassword}
            errors={errors.confirmPassword}
            value={values.confirmPassword}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <Button
            type="submit"
            variant="primary"
            disabled={submitting || !isValid}
            aria-label="submit login form"
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  )
}
