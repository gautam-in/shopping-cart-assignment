import React, { useRef, useState } from "react";
import InputField from "../components/UiComponents/InputField";
import ButtonComponent from "../components/UiComponents/ButtonComponent";
import "../styles/loginregister.scss";
import Constants from "../utils.js/Constants";
import { useNavigate } from "react-router-dom";
const Login = () => {
  document.title = "Login";
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  console.log(emailRef)
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const url = `users?email=${email}&password=${password}`;
    fetch(`${Constants.baseUrl}${url}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          return navigate("/");
        }
        setMessage("Username or password is incorrect!");
		setTimeout(() => {
			emailRef.current.focus();
		  }, 2000);
        setTimeout(() => {
          setMessage("");
        }, 3000);
		
      });
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className="lr-container">
      <div className="lr__form__text">
        <h1>Login</h1>
        <p>Get access to your Orders. Wishlist and Recommendations</p>
        {message && (
          <p aria-live="polite" and role="status">
            {message}{" "}
          </p>
        )}
      </div>
      <div className="lr__form">
        <form onSubmit={formSubmitHandler}>
          <InputField type="email" name="email" label="Email" ref={emailRef} />
          <InputField
            type="password"
            name="password"
            label="Password"
            ref={passwordRef}
          />
          <ButtonComponent
            buttonText="Login"
            value="Login"
            name="Login"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
