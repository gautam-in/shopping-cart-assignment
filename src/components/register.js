import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      confirmPassword: "",
    };
  }
  login = (e) => {
    e.preventDefault();
    const regex = "^(?=.*[a-z])(?=.*d)(?=.{6,})";
    if (!this.state.password.match(regex)) {
      alert("Please match the required format");
    } else if (this.state.password !== this.state.confirmPassword) {
      alert("Password and Confirm password should match!");
    } else {
      this.props.history.push("/");
    }
  };

  handleChange = (e, type) => {
    if (type == "password") {
      this.setState({
        password: e.target.value,
      });
    } else if (type == "confirmPassword") {
      this.setState({
        confirmPassword: e.target.value,
      });
    } else {
      this.setState({
        email: e.target.value,
      });
    }
  };
  render() {
    return (
      <div>
        <Header />
        <main className="mainContainer loginMain">
          <div>
            <h1>Register</h1>
            <p>We do not share your personal details with anyone</p>
          </div>
          <form>
            <div className="form-field">
              <input
                type="text"
                className="form-field__input"
                name="firstName"
                id="firstName"
                placeholder=" "
              />
              <label for="firstName" className="form-field__label">
                First Name
              </label>
              <div className="form-field__bar"></div>
            </div>
            <div className="form-field">
              <input
                type="lastName"
                className="form-field__input"
                name="lastName"
                id="lastName"
                placeholder=" "
              />
              <label for="lastName" className="form-field__label">
                Last Name
              </label>
              <div className="form-field__bar"></div>
            </div>
            <div className="form-field">
              <input
                type="email"
                className="form-field__input"
                name="email"
                id="email"
                placeholder=" "
                required
                onChange={(e) => this.handleChange(e, "email")}
              />
              <label for="email" className="form-field__label">
                Email
              </label>
              <div className="form-field__bar"></div>
            </div>
            <div className="form-field">
              <input
                type="password"
                className="form-field__input"
                name="password"
                id="password"
                placeholder=" "
                minlength="6"
                pattern="^(?=.*[a-zA-Z])(?=\w*[0-9])\w{6,12}$"
                required
                onChange={(e) => this.handleChange(e, "password")}
              />
              <label for="password" className="form-field__label">
                Password
              </label>
              <div className="form-field__bar"></div>
            </div>
            <div className="form-field">
              <input
                type="password"
                className="form-field__input"
                name="confirmPassword"
                id="confirmPassword"
                placeholder=" "
                minlength="6"
                pattern="^(?=.*[a-zA-Z])(?=\w*[0-9])\w{6,12}$"
                required
                onChange={(e) => this.handleChange(e, "confirmPassword")}
              />
              <label for="confirmPassword" className="form-field__label">
                Confirm Password
              </label>
              <div className="form-field__bar"></div>
            </div>
            <button
              type="submit"
              className="btn btn--full"
              onClick={this.login}
            >
              Register
            </button>{" "}
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Register;
