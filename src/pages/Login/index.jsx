import React, { Component } from "react";
import {
  checkValidEmail,
  checkValidPassword,
} from "../../services/formServices";
import InputField from "../../components/InputField";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: [],
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
    if (!isEmailValid || listOfpasswordErrors.length) {
      this.setErrors(isEmailValid, listOfpasswordErrors);
      return;
    }
    this.submitForm();
    this.setState({
      email: "",
      password: "",
    });
  };

  submitForm = () => {
    this.setState({
      errors: {
        email: "",
        password: [],
      },
    });
  };

  setErrors = (isEmailValid, listOfpasswordErrors) => {
    const errors = {
      email: "",
      password: [],
    };
    if (!isEmailValid) {
      errors.email = "Please enter a valid email ID";
    }
    if (listOfpasswordErrors.length) {
      errors.password = listOfpasswordErrors;
    }
    this.setState({ errors });
  };

  render() {
    return (
      <section className="login">
        <div className="login-header">
          <span>
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </span>
        </div>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <InputField
              fieldControl={"email"}
              error={this.state.errors.email}
              value={this.state.email}
              handleChange={this.handleChange}
            />
            {/* Password field */}
            <InputField
              fieldControl={"password"}
              error={this.state.errors.password}
              value={this.state.password}
              handleChange={this.handleChange}
            />

            <input
              aria-label="Log in"
              type="submit"
              id="login-button"
              value="Login"
            />
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
