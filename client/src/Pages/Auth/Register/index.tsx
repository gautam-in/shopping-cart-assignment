import React from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"

import { Alert, Button, TextInput } from "../../../Components"

import { useAuth } from "../../../context"
import { registerSchema } from "../../../utils"

import "./styles.scss"

export const Register = () => {
  const [submitting, setSubmitting] = React.useState(false)
  const [formError, setFormError] = React.useState("")
  const navigate = useNavigate()

  const { register } = useAuth()

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
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: registerSchema,

    onSubmit: async (values) => {
      setSubmitting(true)
      setFormError("")
      try {
        await register(values.email, values.password)
        navigate("/")
      } catch (error: any) {
        console.log(error)
        setFormError(
          error.message.includes("auth")
            ? "Email already exists"
            : "Something went wrong"
        )
        setSubmitting(false)
      }
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
          {formError && <Alert type="danger">{formError}</Alert>}

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
