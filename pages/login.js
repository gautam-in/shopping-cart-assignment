import { useRouter } from "next/router";
import { SIGN_IN } from "../context/actions/Constant";
import SignUpHeader from "../components/atom/SignUpHeader";
import SignUpStyle from "../components/styles/SignupStyle";
import CustomFormStyle from "../components/styles/FormStyle";
import InputBox from "../components/atom/Input";
import { useFormik } from "formik";
import ButtonStyles from "../components/styles/ButtonStyles";
import { loginValidation } from "../Utils/Validation";
import { LoginHeader, LoginDescription } from "../constant/index";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
export default function LoginPage() {
  const router = useRouter();
  const { logindispatch } = useContext(LoginContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (formData) => {
    logindispatch({ type: SIGN_IN, payload: formData });
    router.push("/");
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validate: (values) => loginValidation(values),
  });

  return (
    <SignUpStyle>
      <SignUpHeader header={LoginHeader} description={LoginDescription} />
      <CustomFormStyle method="post" onSubmit={formik.handleSubmit}>
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
        <ButtonStyles type="submit" className="Btn">
          {LoginHeader}
        </ButtonStyles>
      </CustomFormStyle>
    </SignUpStyle>
  );
}
