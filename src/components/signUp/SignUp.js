import React, { useState } from "react";
import Input from "../common/input/Input";
import "./signup.scss";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../redux/actions/actions";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confPass: "",
  });
  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    setError("");
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSignUpClick = () => {
    const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidator = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (
      state.fName !== "" &&
      state.lName !== "" &&
      state.email !== "" &&
      state.password !== "" &&
      state.confPass !== ""
    ) {
      if (
        passwordValidator.test(String(state.password).toLowerCase()) &&
        emailValidator.test(String(state.email).toLowerCase()) &&
        state.password === state.confPass
      ) {
        dispatch(setActiveTab("Home"));
        window.location.href = "#/home";
      } else {
        setError("Please provide valid responses");
      }
    } else {
      setError("Please fill all the fields");
    }
  };

  return (
    <section className="signUpContainer">
      <div className="titleContainer">
        <h1>Signup</h1>
        <div>We do not share your personal details with anyone.</div>
      </div>
      <div className="inputContainer">
        <Input
          placeholder={"First Name"}
          id={"fName"}
          value={state.fName}
          onChange={handleTextChange}
        />
        <Input
          placeholder={"Last Name"}
          id={"lName"}
          value={state.lName}
          onChange={handleTextChange}
        />
        <Input
          placeholder={"Email"}
          id={"email"}
          value={state.email}
          onChange={handleTextChange}
        />
        <Input
          placeholder={"Password"}
          id={"password"}
          value={state.password}
          onChange={handleTextChange}
          type="password"
        />
        <Input
          placeholder={"Confirm Password"}
          id={"confPass"}
          value={state.confPass}
          onChange={handleTextChange}
          type="password"
        />
        {error && <p className="error">{error}</p>}
        <button onClick={() => handleSignUpClick()}>Signup</button>
      </div>
    </section>
  );
};

export default SignUp;
