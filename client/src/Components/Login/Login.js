import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./Login.scss";
import { LoginText, LoginDescription } from "../../Constants/ConstantText";
import { labels } from "../../Constants";
import { userActions } from '../../_actions';
import { connect } from "react-redux";

const Login = (props) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    if (formData["email"] && formData["password"]) {
      props.login(email, password);
    }
  };

  return (
    <main className="login">
      <section className="title">
        <h2 aria-label="Login header" tabIndex="7">{LoginText}</h2>
        <p>{LoginDescription}</p>
      </section>
      <section>
        <form onSubmit={handleSubmit} tabIndex="8" data-testid='login-form' aria-label="Login form for user to log in">
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            label={labels.EMAIL}
            onChange={handleChange}
            htmlFor="emailInput"
            ariaLabel="Email Input"
            tabIndex="9"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={formData.password}
            label={labels.PASSWORD}
            onChange={handleChange}
            htmlFor="passwordInput"
            ariaLabel="Password Input"
            tabIndex="10"
            required
          />
          <CustomButton type="submit" tabIndex="11" >{LoginText}</CustomButton>
        </form>
      </section>
    </main>
  );
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(null, actionCreators)(Login);

