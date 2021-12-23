import { Form, Formik } from 'formik';
import React from 'react';
import TextField from '../../atoms/textField/textField';
import Button from '../../atoms/button/button';
import { signUpFormValidationSchema } from '../../../utils/validations';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpForm() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpFormValidationSchema}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          console.log({ values });
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <TextField name="firstName" type="text" label="First Name" />
            <TextField name="lastName" type="text" label="Last Name" />
            <TextField name="email" type="email" label="Email" />
            <TextField name="password" type="password" label="Password" />
            <TextField name="confirmPassword" type="password" label="Confirm Password" />
            <Button type="submit" onClick={() => console.log('l')}>
              SignUp
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpForm;
