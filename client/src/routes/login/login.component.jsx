import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormInput from './../../components/form-input/form-input.component';
import Button, {
  BUTTON_TYPE_CLASSES,
} from './../../components/button/button.component';

import { SignInContainer, ButtonContainer } from './login.styles.jsx';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /* eslint-disable-next-line */
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Must Contain 8 Characters, One Uppercase, No Space, One Number and One Special Case Character'
    ),
});

export const initialValues = { email: '', password: '' };

const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (data) => {
      console.log(data);
    },
  });

  const { errors, handleChange, values, handleSubmit, handleReset } = formik;

  return (
    <SignInContainer>
      <div>
        <h2>Login</h2>
        <span>Get access to your Orders, Wishlist and Recommendations</span>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          name="email"
          errorMessage={errors.email}
          value={values.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="text"
          name="password"
          errorMessage={errors.password}
          value={values.password}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
            Login
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default Login;
