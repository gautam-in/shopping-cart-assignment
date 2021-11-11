import { auth } from "../firebase";
import { useStore } from "../store/Store";
import { login } from "../actions/userActions";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AuthForm, Authleft, AuthWrapper, FormError, FormGroup, SubmitBtn } from "./AuthStyles";

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter your first name'),
  lastName: yup.string().required('Please enter your last name'),
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().min(8, 'Password should be at at least 8 characters long').required('Please enter a password'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required('Please confirm your password'),
});

export default function SignIn() {
  const {register, handleSubmit, formState: {errors}, watch} = useForm({
    resolver: yupResolver(schema)
  });

  const [, dispatch] = useStore();
  const router = useRouter();
  const onSubmit = ({firstName, lastName, email, password}) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        userCredentials.user.updateProfile({
          displayName: firstName + " " + lastName,
        });
        dispatch(
          login({
            userName: userCredentials.user.displayName,
            email: userCredentials.user.email,
            uid: userCredentials.user.uid,
          })
        );
      })
      .then(() => router.push("/"))
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <AuthWrapper>
      <Authleft>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </Authleft>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoFocus
            placeholder="First Name"
            {...register('firstName')}
          />
          
          <label htmlFor="firstName">First Name</label>
          {errors.firstName && <FormError>{errors.firstName.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            {...register('lastName')}
          />
          <label htmlFor="lastName">Last Name</label>
          {errors.lastName && <FormError>{errors.lastName.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            {...register('email')}
          />
          <label htmlFor="email">Email</label>
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <label htmlFor="password">Password</label>
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword')}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          {errors.confirmPassword && <FormError>Passwords should match!</FormError>}
        </FormGroup>
        <SubmitBtn type='submit'>Register</SubmitBtn>
      </AuthForm>
    </AuthWrapper>
  );
}
