import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/view/header";
import { Input } from "../common/input";
import "../../app/assets/css/login.css";
import "../../app/assets/css/form.css";
import { Footer } from "../common/view/footer";
import { formValidation } from "../common/formValidator";
import { validationRules } from "./validationRules";

const SignUp = () => {
  const [signupDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const localDetails = { ...signupDetails };
    localDetails[e.target.name] = e.target.value;
    setSignUpDetails(localDetails);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let error = formValidation({ ...signupDetails }, validationRules);
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
          <h1>SignUp</h1>
          <p>We do not share your personal details with anyone</p>
        </div>
        <form>
          <Input
            type="text"
            inputName="firstName"
            id="firstname"
            placeholder=" "
            displayName="First Name"
            onChange={handleChange}
            value={signupDetails.firstName}
            errorMessage={errorMessage.firstName}
          />
          <Input
            type="text"
            inputName="lastName"
            id="lastname"
            placeholder=" "
            displayName="Last Name"
            onChange={handleChange}
            value={signupDetails.lastName}
            errorMessage={errorMessage.lastName}
          />
          <Input
            type="email"
            inputName="email"
            id="email"
            placeholder=" "
            displayName="Email"
            onChange={handleChange}
            value={signupDetails.email}
            errorMessage={errorMessage.email}
          />
          <Input
            type="password"
            inputName="password"
            id="password"
            placeholder=" "
            displayName="Password"
            onChange={handleChange}
            value={signupDetails.password}
            errorMessage={errorMessage.password}
          />
          <Input
            type="password"
            inputName="confirmPassword"
            id="confirmpassword"
            placeholder=" "
            displayName="Confirm Password"
            onChange={handleChange}
            value={signupDetails.confirmPassword}
            errorMessage={errorMessage.confirmPassword}
          />
          <button className="btn btn--full" onClick={handleClick}>
            SignUp
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};
export default SignUp;
