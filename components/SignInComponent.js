import { InputStyle, LargeButtonStyle } from "../styles/InputStyle";
import { FormContainer, FormLeft, FormRight } from "../styles/FormStyle";
import { loginUser } from "../utility/user";

import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { clearCart, userLogin } from "../Redux/actions/actions";
import { useDispatch } from "react-redux";

const SignInComponent = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialData);

  const inputChangeHandler = (e) => {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    loginUser(state)
      .then((response) => {
        dispatch(userLogin(response));
        toast.success(`login Successfull`);
        if (router.query.redirect == "checkout") {
          dispatch(clearCart());
          toast.success("Checkout successfull");
        }
        router.push("/");
      })
      .catch((error) => {
        toast.error(error);
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
          <LargeButtonStyle>
            <input type="submit" value="Login" />
          </LargeButtonStyle>
        </form>
      </FormRight>
    </FormContainer>
  );
};

export default SignInComponent;
