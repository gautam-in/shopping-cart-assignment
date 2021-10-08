import Button, { ButtonType } from "components/atoms/button/button";
import TextField from "components/atoms/textField/textField";
import { Form, Formik, FormikProps } from "formik";
import { allRoutes } from "navigation/allRouteNames";
import React from "react";
import * as Yup from "yup";
import { SignUp } from "models/signIn";
import { useDispatch } from "react-redux";
import { initialValues } from "modules/signUp/redux/reducers/reducer";
import { RegularExpression, SignInFormValidations, InputTypes, Label, LoadText, PlaceHolder } from "constants/index";
import { SignUpActions } from "modules/signUp/redux/actions/actions";
import "modules/signUp/signUp.scss";

interface IProps {
  history: { push: Function };
}

const SignUpComponent = (props: IProps): React.ReactElement => {
  const dispatch = useDispatch();
  const formValidationSchema = Yup.object({
    email: Yup.string().matches(RegularExpression.email, SignInFormValidations.emailValidation).required(SignInFormValidations.emptyValidation),
    password: Yup.string().min(6).required(SignInFormValidations.emptyValidation),
    confirmPassword: Yup.string().min(6).required(SignInFormValidations.emptyValidation)
  });

  return (
    <div className="signup-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(SignUpActions.postSignUp(values));
          setSubmitting(false);
          props.history.push(allRoutes.PRODUCTS);
        }}
        validationSchema={formValidationSchema}
        enableReinitialize={true}
      >
        {(formikProps: FormikProps<SignUp>) => (
          <Form>
            <TextField name={"firstName"} type={InputTypes.text} placeholder={PlaceHolder.firstName} label={Label.firstName} id="firstName" />
            <TextField name={"lastName"} type={InputTypes.text} placeholder={PlaceHolder.lastName} label={Label.lastName} id="firstName" />
            <TextField name={"email"} type={InputTypes.email} placeholder={PlaceHolder.emailId} label={Label.email} id="emailId" />
            <TextField name={"password"} type={InputTypes.password} placeholder={PlaceHolder.password} label={Label.password} id="password" />
            <TextField name={"confirmPassword"} type={InputTypes.password} placeholder={PlaceHolder.confirmPassword} label={Label.confirmPassword} id="confirmPassword" />
            <Button loadText={LoadText.posting} type={ButtonType.Primary} id="signUp" btnTyp="submit" customClass="signup-button">
              Signup
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpComponent;
