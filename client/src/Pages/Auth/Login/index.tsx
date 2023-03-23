import React from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

import { Button, TextInput } from "../../../Components"

import "./styles.scss"

export const Login = () => {
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
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Please enter valid email id"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),
    }),

    onSubmit: (values) => {
      setSubmitting(true)
      setTimeout(() => {
        navigate("/")
      }, 1000)
    },
  })

  return (
    <section id="login" className="login grid">
      <div className="description">
        <h1>Login</h1>
        <p>Get access to your orders, Wishlist and Recommendations.</p>
      </div>

      <div className="login-form">
        <form onSubmit={handleSubmit}>
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
