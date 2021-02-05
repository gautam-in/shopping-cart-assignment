import React, { useState } from "react";
import Input from "../common/input/Input";
import "./login.scss";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../redux/actions/actions";

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    setError("");
    e.target.id === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidator = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (email !== "" && password !== "") {
      if (
        passwordValidator.test(String(password).toLowerCase()) &&
        emailValidator.test(String(email).toLowerCase())
      ) {
        {
          dispatch(setActiveTab("Home"));
          window.location.href = "#/home";
        }
      } else {
        setError("Please provide valid responses");
      }
    } else {
      setError("Please fill all the fields");
    }
  };

  return (
    <section className="loginContainer">
      <div className="titleContainer">
        <h1>Login</h1>
        <div>Get access to your Orders, Wishlist and Recommendations</div>
      </div>
      <div className="inputContainer">
        <Input
          placeholder={"Email"}
          id={"email"}
          value={email}
          onChange={handleTextChange}
        />
        <Input
          placeholder={"Password"}
          id={"password"}
          value={password}
          onChange={handleTextChange}
          type="password"
        />
        {error && <p className="error">{error}</p>}
        <button onClick={() => handleLoginClick()}>Login</button>
      </div>
    </section>
  );
};

export default Login;
