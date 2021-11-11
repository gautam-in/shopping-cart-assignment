import { login } from "../actions/userActions";
import { auth } from "../firebase";
import { useStore } from "../store/Store";
import { useRouter } from "next/router";
import { AuthForm, Authleft, AuthWrapper, FormError, FormGroup, SubmitBtn } from "./AuthStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().min(8, 'Password must be of minimum 8 characters').required('Please enter your password')
})

export default function SignIn() {
  
  const router = useRouter();
  const [, dispatch] = useStore();
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = ({email, password}) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) =>
        dispatch(
          login({
            userName: userCredentials.user.displayName,
            email: userCredentials.user.email,
            uid: userCredentials.user.uid,
          })
        )
      )
      .then(() => router.push("/"))
      .catch((error) => alert(error.message));
  };
  return (
    <AuthWrapper>
      <Authleft>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </Authleft>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <input
            id="email"
            name="email"
            type="email"
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
        <SubmitBtn type='submit'>Login</SubmitBtn>
      </AuthForm>
    </AuthWrapper>
  );
}
