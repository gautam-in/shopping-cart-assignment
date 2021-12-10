import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { updateLoginData } from "redux/modules/user";
import InputFormElement from "../../components/HtmlElements/InputFormElement";
import "./Login.scss";

function Login({ updateLoginData }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const storedEmail = localStorage.getItem("email");

  const loginHandler = () => {
    if (email && password) {
      localStorage.setItem("email", email);
      updateLoginData(email);
      navigate("/");
    } else alert("Please enter email and password");
  };
  useEffect(() => {
    if (storedEmail) navigate("/");
  }, [navigate]);

  if (storedEmail) return null;
  return (
    <div className="Login">
      <div className="Login--Header">
        <h2>Login</h2>
        <h4>Get access to your Orders, Wishlist and Recommendations</h4>
      </div>
      <div className="Login--container">
        <InputFormElement
          inputProps={{
            type: "text",
            id: "email",
            onChange: (e) => {
              setEmail(e.target.value);
            },
          }}
          labelProps={{ for: "email", labelText: "Email" }}
          labelText="Email"
          required={true}
        />
        <InputFormElement
          inputProps={{
            type: "password",
            id: "password",
            onChange: (e) => setPassword(e.target.value),
          }}
          labelProps={{ for: "password", labelText: "password" }}
          labelText="Password"
        />
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
}

export default connect(null, {
  updateLoginData,
})(Login);
