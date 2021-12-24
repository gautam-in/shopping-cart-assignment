import Button from '../../atoms/button/button';
import TextField from '../../atoms/textField/textField';
import { Form, Formik } from 'formik';
import { signInFormValidationSchema } from '../../../utils/validations';

const initialValues = {
  email: '',
  password: '',
};

function SignInForm() {
  return (
    <div >
      <Formik
        initialValues={initialValues}
        validationSchema={signInFormValidationSchema}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          console.log({ values });
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <TextField name="email" type="email" label="Email" />
            <TextField name="password" type="password" label="Password" />
            <Button type="submit" onClick={() => console.log('onclick')}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignInForm;
