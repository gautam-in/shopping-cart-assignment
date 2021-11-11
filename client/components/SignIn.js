import { InputStyle, LargeButtonStyle } from "../styles/InputStyle";
import { FormContainer, FormLeft, FormRight } from "../styles/FormStyle";
import { loginUser } from "../utility/user";
import { useState } from "react";
import { useRouter } from "next/router";
import { clearCart, userLogin } from "../Redux/actions/actions";
import { useDispatch } from "react-redux";
import {
  validateUserEmail,
} from "../utility/validation";

const SignIn = () => {
  const initialData = {
    email: "",
    password: "",
    error: ""
  };
  const [state, setState] = useState(initialData);

  const inputChangeHandler = (e) => {
    setState((prev) => ({ ...prev, error: '', [e.target.id]: e.target.value }));
  };

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    
    if (!validateUserEmail(state.email)) {
      setState((prev) => ({ ...prev, error: 'Invalid Mail' }));
      return;
    }
    loginUser(state)
      .then((response) => {
        dispatch(userLogin(response));
        if (router.query.redirect == "checkout") {
          dispatch(clearCart());
        }
        router.push("/");
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error: 'Failed to login' }));
      });
  };

  const router = useRouter();

  return (
    <FormContainer>
      <FormLeft>
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </FormLeft>
      <FormRight>
        <form onSubmit={loginHandler}>
          <InputStyle>
            <input
              id="email"
              type="text"
              name="email"
              required
              value={state.email}
              onChange={inputChangeHandler}
            />
            <label htmlFor="email">Email</label>
          </InputStyle>
          <InputStyle>
            <input
              id="password"
              type="password"
              name="password"
              required
              value={state.password}
              onChange={inputChangeHandler}
            />
            <label htmlFor="Password">Password</label>
          </InputStyle>
          {state.error && <span role="alert" style={{color:'red'}}>{state.error}</span>}
          <LargeButtonStyle>
            <input type="submit" value="Login" />
          </LargeButtonStyle>
        </form>
      </FormRight>
    </FormContainer>
  );
};

export default SignIn;
