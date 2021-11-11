import {
  userExist,
  validateUserEmail,
  validUserEmailString,
  validUserPasswordString,
} from "../utility/validation";
import { registerUser } from "../utility/user";
import { InputStyle, LargeButtonStyle } from "../styles/InputStyle";
import { FormContainer, FormLeft, FormRight } from "../styles/FormStyle";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";

const Register = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const initError = {
    email: "",
    firstName: "",
    password: "",
    confirmPassword: "",
  };
  const [state, setState] = useState(initialData);
  const [error, setError] = useState(initError);

  const router = useRouter();

  const registerHandler = (e) => {
    e.preventDefault();
    registerUser(state)
      .then((success) => {
        toast.success(success);
        router.push("/signIn");
      })
      .catch((error) => {
        toast.error("Unalbe to register!");
        setError(error);
      });
  };
  const inputChangeHandler = (e) => {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    if (e.target.id === "confirmPassword" || e.target.id === "password") {
      if (e.target.value != document.getElementById("password").value) {
        e.target.setCustomValidity(
          "Password and Confirm password Must be Matching."
        );
      } else {
        e.target.setCustomValidity("");
      }
    }

    if (e.target.id === "email") {
      if (userExist(e.target.value)) {
        e.target.setCustomValidity("User already exist");
      } else {
        e.target.setCustomValidity("");
      }
    }
  };

  const firstNameRef = useRef();

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <FormContainer>
      <FormLeft>
        <h2>Signup</h2>
        <p>We don not share your personal details with anyone.</p>
      </FormLeft>
      <FormRight>
        {Object.keys(error).length > 0 && (
          <div className="formError" role="alert">
            {error.firstName && <p>First Name : {error.firstName}</p>}
            {error.email && <p>Email :{error.email}</p>}
            {error.password && <p>Password :{error.password}</p>}
            {error.confirmPassword && (
              <p>Confirm Password :{error.confirmPassword}</p>
            )}
          </div>
        )}
        <form onSubmit={registerHandler}>
          <InputStyle>
            <input
              id="firstName"
              type="text"
              name="fisrtName"
              minLength="3"
              maxLength="30"
              required
              value={state.firstName || ""}
              onChange={inputChangeHandler}
              ref={firstNameRef}
            />
            <label htmlFor="fisrtName">First Name</label>
          </InputStyle>
          <InputStyle>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={state.lastName || ""}
              required
              onChange={inputChangeHandler}
            />
            <label htmlFor="lastName">Last Name</label>
          </InputStyle>
          <InputStyle>
            <input
              id="email"
              type="text"
              name="email"
              required
              value={state.email}
              onChange={inputChangeHandler}
              pattern={validUserEmailString}
            />
            <label htmlFor="Email">Email</label>
          </InputStyle>
          <InputStyle>
            <input
              id="password"
              type="password"
              name="password"
              required
              value={state.password || ""}
              onChange={inputChangeHandler}
              pattern={validUserPasswordString}
            />
            <label htmlFor="Password">Password</label>
          </InputStyle>
          <InputStyle>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              required
              value={state.confirmPassword || ""}
              onChange={inputChangeHandler}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </InputStyle>
          <LargeButtonStyle>
            <input type="submit" value="Signup" />
          </LargeButtonStyle>
        </form>
      </FormRight>
    </FormContainer>
  );
};

export default Register;
