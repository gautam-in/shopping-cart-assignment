import Button, { ButtonType } from "components/atoms/button/button";
import TextField from "components/atoms/textField/textField";
import { Form, Formik, FormikProps } from "formik";
import { allRoutes } from "navigation/allRouteNames";
import React from "react";
import * as Yup from "yup";
import { SignIn } from "models/signIn";
import { RegularExpression, SignInFormValidations, InputTypes, LoadText, PlaceHolder, Label } from "constants/index";
import { useDispatch } from "react-redux";
import { SignInActions } from "modules/signIn/redux/actions/actions";
import { initialValues } from "modules/signIn/redux/reducers/reducer";
import "modules/signIn/signIn.scss";

interface IProps {
  history: { push: Function };
}

const SignInComponent = (props: IProps): React.ReactElement => {
  const dispatch = useDispatch();
  const formValidationSchema = Yup.object({
    email: Yup.string().matches(RegularExpression.email, SignInFormValidations.emailValidation).required(SignInFormValidations.emptyValidation),
    password: Yup.string().min(6).required(SignInFormValidations.emptyValidation)
  });

  return (
    <div className="signin-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(SignInActions.postSignIn(values));
          setSubmitting(false);
          props.history.push(allRoutes.PRODUCTS);
        }}
        validationSchema={formValidationSchema}
        enableReinitialize={true}
      >
        {(formikProps: FormikProps<SignIn>) => (
          <Form>
            <TextField name={"email"} type={InputTypes.email} placeholder={PlaceHolder.emailId} label={Label.email} id="emailId" />
            <TextField name={"password"} type={InputTypes.password} placeholder={PlaceHolder.password} label={Label.password} id="password" />
            <Button loadText={LoadText.posting} type={ButtonType.Primary} id="signIn" btnTyp="submit" customClass="signin-button">
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInComponent;
