import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./Login.scss";
import { LoginText } from "../../Constants/ConstantText";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <main className="login">
        <section className="title">
          <h2>Login</h2>
          <p>Get access to Orders, Whishlist and Recommendations</p>
        </section>
        <section>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={this.state.email}
              label="Email"
              onChange={this.handleChange}
              htmlFor="emailInput"
              ariaLabel="Email Input"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={this.state.password}
              label="Password"
              onChange={this.handleChange}
              htmlFor="passwordInput"
              ariaLabel="Password Input"
              required
            />
            <CustomButton type="submit">{LoginText}</CustomButton>
          </form>
        </section>
      </main>
    );
  }
}

export default Login;
