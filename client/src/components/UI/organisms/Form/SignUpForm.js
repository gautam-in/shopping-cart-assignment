import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { LogginSuccess } from "../../../../redux/actions/index";

const SignUpForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        // setSubmitting(false);
        dispatch(
          LogginSuccess(`${values.firstName}  ${"  "} ${values.lastName}`)
        );
        history.push("/");
      }}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Form>
          <Box margin={1}>
            <Field
              component={TextField}
              name="firstName"
              type="firstName"
              label="First Name"
            />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              name="lastName"
              type="lastName"
              label="Last Name"
            />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              placeholder="Please Enter Email"
            />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              type="password"
              label="Confirm Password"
              name="password"
            />
          </Box>
          <Box margin={5}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
