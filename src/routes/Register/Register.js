import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputText from "../../components/InputText/InputText";

function Register({}) {
  const windowSize = useSelector((state) => state.user.windowSize);
  const [error, setError] = useState("");

  const emailValidation = (emailText) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailText || regex.test(emailText) === false) {
      setError("Please enter a valid email");
      return false;
    }
    return true;
  };
  const passwordValidation = (passwordText, confirmPasswordText) => {
    if (!passwordText || passwordText.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    if (!confirmPasswordText || confirmPasswordText.length < 6) {
      setError("Confirm Password must be at least 6 characters long");
      return false;
    }
    if (passwordText !== confirmPasswordText) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      event.target;
    if (email.value.length) {
      if (
        emailValidation(email.value) ||
        passwordValidation(password.value, confirmPassword.value)
      ) {
        const formData = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
          confirmPassword: confirmPassword.value,
        };
        console.log(formData);
      }
    }
  };

  return (
    <div
      className={`bg-white p-4 ${
        windowSize > 600 ? "flex justify-center" : "text-center"
      }`}
    >
      <div className={`${windowSize > 600 ? "w-1/3" : ""} text-center mr-4`}>
        <header className="text-xl font-bold my-4">Signup</header>
        <p className="font-semibold">
          We do not share your personal details with anyone
        </p>
      </div>
      <div className={`${windowSize > 600 ? "w-1/3" : " mt-4 text-center"}`}>
        <form onSubmit={handleSignup}>
          <InputText label="First Name" name="firstName" />
          <InputText label="Last Name" name="lastName" />
          <InputText label="Email" name="email" type="email"/>
          <InputText label="Password" name="password" type='password'/>
          <InputText label="Confirm Password" name="confirmPassword" type='password'/>
          {error?<p className="font-12 text-red-500 text-center mb-2">{error}</p>:null}
          <button className="w-full text-center bg-primary text-white font-semibold p-2">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
