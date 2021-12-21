import * as Yup from "yup";

export const signUpFormValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "required min 3 characters")
    .required("First Name is Required"),
  lastName: Yup.string()
    .min(3, "required min 1 characters")
    .required("Last Name is Required"),
  email: Yup.string().email("enter valid email").required("Email is required"),
  password: Yup.string()
    .min(6, "required min 6 characters")
    .required("password cannot be empty"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const signInFormValidationSchema = Yup.object({
  email: Yup.string().email("enter valid email").required("Email is required"),
  password: Yup.string().required("password cannot be empty"),
});
