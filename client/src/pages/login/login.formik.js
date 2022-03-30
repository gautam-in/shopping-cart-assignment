import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

export const initialValues = { email: "", password: "" };
