import React, { Component } from "react";
import {
  checkValidEmail,
  checkValidPassword,
  checkNameValid,
} from "../../services/formServices";
import InputField from "../../components/InputField";
import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",

      errors: {
        email: "",
        password: [],
        firstName: "",
        lastName: "",
        confirmPassword: "",
      },
    };
  }

  // Handles input value changes for controlled component
  handleChange = (e) => {
    const { name, value } = e.target;
    if (!(name && value)) return;
    this.setState({
      [name]: value,
    });
  };

  // Handles form submission for controlled component
  handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = checkValidEmail(this.state.email);
    const listOfpasswordErrors = checkValidPassword(this.state.password);
    const isFirstNameValid = checkNameValid(this.state.firstName);
    const isLastNameValid = checkNameValid(this.state.lastName);
    if (
      !isEmailValid ||
      !isFirstNameValid ||
      !isLastNameValid ||
      listOfpasswordErrors.length ||
      this.state.confirmPassword !== this.state.password
    ) {
      this.setErrors(
        isEmailValid,
        listOfpasswordErrors,
        isFirstNameValid,
        isLastNameValid
      );
      return;
    }
    this.submitForm();
  };

  submitForm = () => {
    this.setState({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
      errors: {
        email: "",
        password: [],
        firstName: "",
        lastName: "",
        confirmPassword: "",
      },
    });
    // TO BE REPLACED WITH POST ONCE POST API IS PROVIDED
    window.location.replace("http://localhost:3000");
  };

  setErrors = (
    isEmailValid,
    listOfpasswordErrors,
    isFirstNameValid,
    isLastNameValid
  ) => {
    const errors = {
      email: "",
      password: [],
      firstName: "",
      lastName: "",
      confirmPassword: "",
    };
    if (!isEmailValid) {
      errors.email = "Please enter a valid email ID";
    }
    if (listOfpasswordErrors.length) {
      errors.password = listOfpasswordErrors;
    }
    if (!isFirstNameValid)
      errors.firstName =
        "First name cannot be more than 15 characters or less than 2 characters";
    if (!isLastNameValid)
      errors.lastName =
        "Last name cannot be more than 15 characters or less than 2 characters";
    if (this.state.confirmPassword !== this.state.password)
      errors.confirmPassword = "Confirm password should match given password";
    this.setState({ errors });
  };

  render() {
    return (
      <section className="signup">
        <div className="signup-header">
          <span>
            <h1>Sign Up</h1>
            <p>We do not share your personal details with anyone</p>
          </span>
        </div>
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            {/* Name Fields */}
            <InputField
              fieldControl={"firstName"}
              fieldName="First Name"
              error={this.state.errors.firstName}
              value={this.state.firstName}
              handleChange={this.handleChange}
            />
            <InputField
              fieldControl={"lastName"}
              fieldName="Last Name"
              error={this.state.errors.lastName}
              value={this.state.lastName}
              handleChange={this.handleChange}
            />
            {/* Email Field */}
            <InputField
              fieldControl={"email"}
              error={this.state.errors.email}
              value={this.state.email}
              handleChange={this.handleChange}
            />
            {/* Password fields */}
            <InputField
              fieldControl={"password"}
              type={"password"}
              error={this.state.errors.password}
              value={this.state.password}
              handleChange={this.handleChange}
            />
            <InputField
              fieldControl={"confirmPassword"}
              fieldName="Confirm Password"
              type={"password"}
              error={this.state.errors.confirmPassword}
              value={this.state.confirmPassword}
              handleChange={this.handleChange}
            />
            <input
              aria-label="Sign up"
              type="submit"
              id="signup-button"
              value="Sign Up"
            />
          </form>
        </div>
      </section>
    );
  }
}

export default Register;
