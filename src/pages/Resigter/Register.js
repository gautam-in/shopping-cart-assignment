import React, { useState } from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPwd: "",
};

export default function Register() {
  const [formData, setFormData] = useState(initialState);
  const [userMessage, setUserMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const history = useHistory();
  const onFormSubmit = (e) => {
    e.preventDefault();
    const regPassword = /^(?!.* )(?=.*\d)(?=.*[A-Z]).{6,18}$/;
    if (formData.firstName && formData.email && formData.password) {
      if (formData.password !== formData.confirmPwd) {
        setUserMessage("Passwords Don't Match");
        return;
      }
      if (!regPassword.test(formData.password)) {
        setUserMessage(
          "Passwords Must Contain 6 Characters, A Number And A Alphabet"
        );
        return;
      }

      let allUserData = JSON.parse(localStorage.getItem("user-details")) || [];
      if (
        allUserData.length &&
        allUserData.filter((el) => el.email === formData.email).length
      ) {
        setUserMessage("Email already Registered");
        return;
      }

      let userData = {
        email: formData.email,
        password: formData.password,
        name: `${formData.firstName} ${formData.lastName}`,
      };

      setUserMessage("User Registered Successfully");
      setIsSuccess(true);
      allUserData.push(userData);
      localStorage.setItem("user-details", JSON.stringify(allUserData));
      setTimeout(() => history.push("/signin"), 1500);
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
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone</p>
      </div>
      <div className="signin-action">
        <form onSubmit={onFormSubmit} className="signin-action-form">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={formChangeHandler}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={formChangeHandler}
          />
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
          <input
            type="password"
            id="confirmPwd"
            placeholder="Confirm Password"
            required
            value={formData.confirmPwd}
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
