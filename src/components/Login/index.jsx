import React, { Component } from "react";
import {
  checkValidEmail,
  checkValidPassword,
} from "../../services/formServices";
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
    console.log(this.state);
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
            {/* Email field */}
            <label htmlFor="email">Email</label>
            {this.state.errors.email && (
              <div className="error-message">
                <small>{this.state.errors.email}</small>
              </div>
            )}
            <input
              type="text"
              id="email"
              name="email"
              aria-required="true"
              value={this.state.email}
              onChange={this.handleChange}
            />

            {/* Password field */}
            <label htmlFor="password">Password</label>
            {this.state.errors.password.length ? (
              <div className="error-message">
                <small>
                  Sorry, your password:
                  <ul>
                    {this.state.errors.password.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </small>
              </div>
            ) : (
              ""
            )}
            <input
              type="password"
              id="password"
              name="password"
              aria-required="true"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <input type="submit" id="login-button" value="Login" />
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
