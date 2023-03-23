import React from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"

import { Button, TextInput } from "../../../Components"

import { useAuth } from "../../../context"
import { loginSchema } from "../../../utils"

import "./styles.scss"

export const Login = () => {
  const [submitting, setSubmitting] = React.useState(false)
  const navigate = useNavigate()

  const { login } = useAuth()

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

    validationSchema: loginSchema,

    onSubmit: async (values) => {
      setSubmitting(true)
      try {
        await login(values.email, values.password)
        navigate("/")
      } catch (error) {
        console.log(error)
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
