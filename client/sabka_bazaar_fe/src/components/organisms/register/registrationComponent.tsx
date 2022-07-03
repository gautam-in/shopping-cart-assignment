import Button, { ButtonType } from "components/atoms/button/button";
import { InputTypes, Label, LoadText, LoginFormValidations, PlaceHolder, RegularExpression } from "components/constants/constants";
import TextField from "components/atoms/textField/textField";
import { Form, Formik, FormikProps } from "formik";
import { SignUp } from "models/login";
import { allRoutes } from "navigation/allRouteNames";
import React, { useEffect } from "react";
import { LocalStorage } from "services/storage";
import * as Yup from "yup";
import "pages/register/register.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

interface IProps {
  history: { push: Function };
  loading: boolean;
  postSignUp: Function;
  user: SignUp;
}

function RegistrationComponent(props: IProps): React.ReactElement {
  const formValidationSchema = Yup.object({
    email: Yup.string().matches(RegularExpression.email, LoginFormValidations.emailValidation).required(LoginFormValidations.emptyValidation),
    password: Yup.string().min(6).required(LoginFormValidations.emptyValidation),
    confirmPassword: Yup.string().min(6).required(LoginFormValidations.emptyValidation)
  });

  useEffect(() => {
    let userStatus = LocalStorage.getStorage("status");
    userStatus === "logged-in" && props.history.push(allRoutes.PLP);
  }, [LocalStorage.getStorage("status"), props.history]);

  return (
    <div className="register-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          props.postSignUp(values);
          LocalStorage.setStorage("status", "logged-in");
          setSubmitting(false);
          props.history.push(allRoutes.PLP);
        }}
        validationSchema={formValidationSchema}
        enableReinitialize={true}
      >
        {(formikProps: FormikProps<SignUp>) => (
          <Form className="signup__form">
            <TextField name={"firstName"} type={InputTypes.text} placeholder={PlaceHolder.firstName} label={Label.firstName} id="firstName" />
            <TextField name={"lastName"} type={InputTypes.text} placeholder={PlaceHolder.lastName} label={Label.lastName} id="firstName" />
            <TextField name={"email"} type={InputTypes.email} placeholder={PlaceHolder.emailId} label={Label.email} id="emailId" />
            <TextField name={"password"} type={InputTypes.password} placeholder={PlaceHolder.password} label={Label.password} id="password" />
            <TextField name={"confirmPassword"} type={InputTypes.text} placeholder={PlaceHolder.confirmPassword} label={Label.confirmPassword} id="confirmPassword" />
            <Button loadText={LoadText.posting} type={ButtonType.Primary} id="signUp" btnTyp="submit" loading={props.loading} customClass="signup-button">
              Signup
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationComponent;
