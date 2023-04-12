import React from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"

import { Alert, Button, TextInput } from "../../../Components"

import { useAuth } from "../../../context"
import { loginSchema } from "../../../utils"

import "./styles.scss"

export const Login = () => {
  const [submitting, setSubmitting] = React.useState(false)
  const [formError, setFormError] = React.useState("")
  const navigate = useNavigate()

  const { login } = useAuth()

  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: async (values) => {
      setSubmitting(true)
      setFormError("")
      try {
        await login(values.email, values.password)
        navigate("/")
      } catch (error: any) {
        console.log(error)
        setFormError(
          error.message.includes("auth")
            ? "Invalid credentials"
            : "something went wrong"
        )
        setSubmitting(false)
      }
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
          {formError && <Alert type="danger">{formError}</Alert>}

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
            disabled={submitting || !(isValid && dirty)}
            aria-label="submit login form"
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  )
}
