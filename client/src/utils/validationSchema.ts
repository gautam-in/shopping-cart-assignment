import * as Yup from "yup"

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter valid email id"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
})

export const registerSchema = Yup.object({
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
})
