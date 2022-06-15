import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/view/header";
import { Input } from "../common/input";
import "../../app/assets/css/login.css";
import "../../app/assets/css/form.css";
import { Footer } from "../common/view/footer";
import { formValidation } from "../common/formValidator";
import { validationRules } from "./validationRules";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const localDetails = { ...loginDetails };
    localDetails[e.target.name] = e.target.value;
    setLoginDetails(localDetails);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let error = formValidation({ ...loginDetails }, validationRules);
    setErrorMessage(error.errorMessage);
    if (!error.isError) {
      navigate("/");
    }
  };
  return (
    <>
      <Header />
      <main className="container">
        <div>
          <h1>Login</h1>
          <p>Get access to your Orders. Wishlist and RecommendationsLogin</p>
        </div>
        <form>
          <Input
            type="email"
            inputName="email"
            id="email"
            placeholder=" "
            value={loginDetails.email}
            displayName="Email"
            onChange={handleChange}
            errorMessage={errorMessage.email}
          />
          <Input
            type="password"
            inputName="password"
            id="password"
            placeholder=" "
            displayName="Password"
            value={loginDetails.password}
            onChange={handleChange}
            errorMessage={errorMessage.password}
          />
          <button className="btn btn--full" onClick={handleClick}>
            Login
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};
export default Login;
