import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormInput from './../../components/form-input/form-input.component';
import Button, {
  BUTTON_TYPE_CLASSES,
} from './../../components/button/button.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { setCurrentUser } from '../../store/user/user.actions';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async ({ email }) => {
      // demo login implementation
      await dispatch(setCurrentUser(email));

      if (user) {
        handleReset();
        navigate('/');
        toast.success('Login successful.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
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
          type="password"
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
