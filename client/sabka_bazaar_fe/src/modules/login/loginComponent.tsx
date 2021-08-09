import Button, { ButtonType } from "components/button/button";
import { InputTypes, Label, LoadText, LoginFormValidations, PlaceHolder, RegularExpression } from "components/constants/constants";
import TextField from "components/textField/textField";
import { Form, Formik, FormikProps } from "formik";
import { Login } from "models/login";
import { allRoutes } from "navigation/allRouteNames";
import React, { useEffect } from "react";
import { LocalStorage } from "services/storage";
import * as Yup from "yup";
import "./login.scss";

const initialValues = {
  email: "",
  password: ""
};

interface IProps {
  loading?: boolean;
  history: { push: Function };
  postLogin: Function;
}

function LoginComponent(props: IProps): React.ReactElement {
  const { postLogin, history } = props;
  const formValidationSchema = Yup.object({
    email: Yup.string().matches(RegularExpression.email, LoginFormValidations.emailValidation).required(LoginFormValidations.emptyValidation),
    password: Yup.string().min(6).required(LoginFormValidations.emptyValidation)
  });

  useEffect(() => {
    let userStatus = LocalStorage.getStorage("status");
    userStatus === "logged-in" && history.push(allRoutes.PLP);
  }, [LocalStorage.getStorage("status")]);

  return (
    <div className="login-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          postLogin(values);
          LocalStorage.setStorage("status", "logged-in");
          setSubmitting(false);
          history.push(allRoutes.PLP);
        }}
        validationSchema={formValidationSchema}
        enableReinitialize={true}
      >
        {(formikProps: FormikProps<Login>) => (
          <Form className="login__form">
            <TextField name={"email"} type={InputTypes.email} placeholder={PlaceHolder.emailId} label={Label.email} id="emailId" />
            <TextField name={"password"} type={InputTypes.password} placeholder={PlaceHolder.password} label={Label.password} id="password" />
            <Button loadText={LoadText.posting} type={ButtonType.Primary} id="loginGet" btnTyp="submit" loading={props.loading} customClass="login-button">
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginComponent;
