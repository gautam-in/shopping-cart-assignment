import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../FormInput/FormInput.component";
import "./signIn.styles.scss";
import { withRouter } from "react-router-dom";


const SignIn = ({history}) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    history.push('/')
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
    if (event.target.name === "email") {
      const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

      if (!emailPattern.test(event.target.value)) {
        const emailError = "Please add valid email pattern wich includes @";
        setInputError({ ...inputError, [name]: emailError });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }

    if (event.target.name === "password") {
      const passworPattern = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-zA-Z])(?!.*\s)/;

      if (!passworPattern.test(event.target.value)) {
        const passwordError =
          "Please add valid Password (min-length 6, atleast 1 alpha numeric and no space)";
        setInputError({ ...inputError, [name]: passwordError });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }
  };

  return (
    <div className="sign-in">
      <div className="signIn__content">
        <h2 className="title">Login</h2>
        <span>Get access to your Orders, Wishlist and Recommensations</span>
      </div>
      <form onSubmit={handleSubmit} className="signIn__form">
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
          error={inputError.email}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
          error={inputError.password}
        />
        <CustomButton
          type="submit"
          className="buttons"
          disabled={inputError.email || inputError.password}
        >
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};
export default withRouter(SignIn);
