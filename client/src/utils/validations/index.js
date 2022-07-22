import * as yup from 'yup';

export const signupValidationSchema = yup.object().shape({

  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: yup.string().required('Password is required').matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    "Must contain atleast 6 Characters with a number and an alphabet"
  ).matches(/^\S*$/,
   "Space not allowed"
  ),
  confirmPassword: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
});






export const signinValidationSchema = yup.object().shape({
  email: yup
    .string().email('Must be a valid email').max(255).required('Email is required'),
  password: yup.string().required('Password is required')
});





