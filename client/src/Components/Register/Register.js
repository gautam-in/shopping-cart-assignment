import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./Register.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      <main className="register">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="firstName"
            value={this.state.firstName}
            label="First Name"
            onChange={this.handleChange}
            htmlFor="firstNameInput"
            ariaLabel="FirstName Input"
            required
          />
          <FormInput
            type="text"
            name="lastName"
            value={this.state.lastName}
            label="Last Name"
            onChange={this.handleChange}
            htmlFor="lastNameInput"
            ariaLabel="LastName Input"
            required
          />
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
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            htmlFor="confirmPasswordInput"
            ariaLabel="Confirm Password Input"
            required
          />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </main>
    );
  }
}

export default Register;
