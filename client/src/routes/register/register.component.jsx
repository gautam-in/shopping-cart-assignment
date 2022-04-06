import { useFormik } from 'formik';

import * as Yup from 'yup';

import FormInput from './../../components/form-input/form-input.component';
import Button, {
  BUTTON_TYPE_CLASSES,
} from './../../components/button/button.component';

import { SignUpContainer } from './register.styles';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /* eslint-disable-next-line */
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Must Contain 8 Characters, One Uppercase, No Space, One Number and One Special Case Character'
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .matches(
      /* eslint-disable-next-line */
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Must Contain 8 Characters, One Uppercase, No Space, One Number and One Special Case Character'
    )
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (data) => {
      console.log(data);
    },
  });

  const { errors, handleChange, values, handleSubmit, handleReset } = formik;

  return (
    <SignUpContainer>
      <div>
        <h2>Signup</h2>
        <span>We don't share your personal details with anyone.</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          errorMessage={errors.firstName}
        />
        <FormInput
          label="Last Name"
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          errorMessage={errors.lastName}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          errorMessage={errors.email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          errorMessage={errors.password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          errorMessage={errors.confirmPassword}
        />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default Register;
