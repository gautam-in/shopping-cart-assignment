import React, { useState } from "react";
import "./SignIn.scss";
import { useHistory } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [formData, setFormData] = useState(initialState);
  const [userMessage, setUserMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const history = useHistory();
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      let userData = JSON.parse(localStorage.getItem("user-details"));
      if (!userData) {
        setUserMessage("No User Present, Register First");
        return;
      }
      debugger
      if (
        userData.email !== formData.email &&
        userData.password !== formData.password
      ) {
        setUserMessage("Invalid Credentials");
        return;
      }
      setUserMessage("Login Successfully");
      setIsSuccess(true);
      localStorage.setItem("user-status", "loggedIn");
      setTimeout(() => history.push("/"), 1500);
    } else {
      setUserMessage("Fill All The Fields");
      return;
    }
  };
  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <section className="signin">
      <div className="signin-text">
        <h1>Login</h1>
        <p>Get access to your orders, wishlist and recommedations</p>
      </div>
      <div className="signin-action">
        <form onSubmit={onFormSubmit} className="signin-action-form">
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={formChangeHandler}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={formChangeHandler}
          />
          {userMessage && (
            <span className={isSuccess ? "msg success-msg" : "msg error-msg"}>
              {userMessage}
            </span>
          )}
          <button>Signup</button>
        </form>
      </div>
    </section>
  );
}
