import { useRouter } from "next/router";
import { SIGN_IN } from "../context/actions/Constant";
import SignUpHeader from "../components/atom/SignUpHeader";
import SignUpStyle from "../components/styles/SignupStyle";
import CustomFormStyle from "../components/styles/FormStyle";
import InputBox from "../components/atom/Input";
import { useFormik } from "formik";
import ButtonStyles from "../components/styles/ButtonStyles";
import { RegisterValidation } from "../Utils/Validation";
import { SignupHeader, SignupDescription } from "../constant/index";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
export default function UserRegisterPage() {
  const router = useRouter();
  const { logindispatch } = useContext(LoginContext);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (formData) => {
    logindispatch({ type: SIGN_IN, payload: formData });
    router.push("/");
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validate: (values) => RegisterValidation(values),
  });
  return (
    <SignUpStyle>
      <SignUpHeader header={SignupHeader} description={SignupDescription} />
      <CustomFormStyle method="post" onSubmit={formik.handleSubmit}>
        <InputBox
          name="firstname"
          type="text"
          label="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
          error={
            formik.touched.firstname && formik.errors.firstname
              ? formik.errors.firstname
              : ""
          }
        />
        <InputBox
          name="lastname"
          type="text"
          label="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
          error={
            formik.touched.lastname && formik.errors.lastname
              ? formik.errors.lastname
              : ""
          }
        />
        <InputBox
          name="email"
          type="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""
          }
        />
        <InputBox
          name="password"
          type="password"
          label="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""
          }
        />
        <InputBox
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""
          }
        />
        <ButtonStyles type="submit" className="Btn">
          {SignupHeader}
        </ButtonStyles>
      </CustomFormStyle>
    </SignUpStyle>
  );
}
