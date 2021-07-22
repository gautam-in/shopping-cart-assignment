import React, { Component } from "react";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "../commonData/index";
import { toast } from "react-toastify";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      buttonEnableValidation: true,
      firstNameValidation: "",
      lastNameValidation: "",
      emailValidation: "",
      passwordValidation: "",
      confirmPasswordValidation: "",
      bothPasswordValidation: "",
    };
  }

  validation = (data, id) => {
    console.log("validating");
    if (id === "firstName") {
      if (nameValidation(data)) {
        this.setState({
          firstNameValidation: false,
        });
      } else {
        this.setState({
          firstNameValidation: true,
        });
      }
    } else if (id === "lastName") {
      if (nameValidation(data)) {
        this.setState({
          lastNameValidation: false,
        });
      } else {
        this.setState({
          lastNameValidation: true,
        });
      }
    } else if (id === "email") {
      if (emailValidation(data)) {
        this.setState({
          emailValidation: false,
        });
      } else {
        this.setState({
          emailValidation: true,
        });
      }
    } else if (id === "password") {
      if (passwordValidation(data)) {
        this.setState({
          passwordValidation: false,
        });
      } else {
        this.setState({
          passwordValidation: true,
        });
      }
    } else if (id === "confirmPassword") {
      if (passwordValidation(data)) {
        this.setState({
          confirmPasswordValidation: false,
        });
      } else {
        this.setState({
          confirmPasswordValidation: true,
        });
      }
    }
  };

  confirmPasswordValidation = (name) => {
    if (name === this.state.password) {
      this.setState({
        bothPasswordValidation: false,
      });
    } else {
      this.setState({
        bothPasswordValidation: true,
      });
    }
  };

  onChangeInputType = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    this.validation(event.target.value, event.target.id);
    setTimeout(() => {
      this.buttonEnableValidation();
    }, 0);
    if (event.target.id === "confirmPassword") {
      this.confirmPasswordValidation(event.target.value);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem(this.state.email, this.state.password);
    toast.success("Successfully Created Account!");
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      buttonEnableValidation: true,
    });
  };

  buttonEnableValidation = () => {
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password &&
      this.state.confirmPassword &&
      !this.state.firstNameValidation &&
      !this.state.lastNameValidation &&
      !this.state.emailValidation &&
      !this.state.passwordValidation &&
      !this.state.confirmPasswordValidation &&
      !this.state.bothPasswordValidation
    ) {
      this.setState({
        buttonEnableValidation: false,
      });
    } else {
      this.setState({
        buttonEnableValidation: true,
      });
    }
  };

  render() {
    return (
      <>
        <section className="signupContainer">
          <article className="signupLeftSide">
            <h1 className="signupTitle">Signup</h1>
            <p className="signupPara">
              We do not share your personal details with anyone
            </p>
          </article>
          <article className="signupRightSide">
            <form autoComplete="off">
              {/* <label htmlFor="firstName">First Name</label> */}
              <input
                type="text"
                id="firstName"
                value={this.state.firstName}
                className="inputType"
                placeholder="First Name"
                onChange={this.onChangeInputType}
                style={{
                  borderBottom: this.state.firstNameValidation
                    ? "red solid 2px"
                    : "rgb(177, 175, 175) solid 2px",
                }}
              />
              <p className="inputtypeError">
                {this.state.firstNameValidation
                  ? "Name should not starts with Numbers ( 3 - 16 Characters only )"
                  : ""}
              </p>
              {/* <label htmlFor="lastName">Last Name</label> */}
              <input
                type="text"
                id="lastName"
                value={this.state.lastName}
                className="inputType"
                placeholder="Last Name"
                onChange={this.onChangeInputType}
                style={{
                  borderBottom: this.state.lastNameValidation
                    ? "red solid 2px"
                    : "rgb(177, 175, 175) solid 2px",
                }}
              />
              <p className="inputtypeError">
                {this.state.lastNameValidation
                  ? "Name should not starts with Numbers ( 3 - 16 Characters only )"
                  : ""}
              </p>
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="text"
                id="email"
                value={this.state.email}
                className="inputType"
                placeholder="Email"
                onChange={this.onChangeInputType}
                style={{
                  borderBottom: this.state.emailValidation
                    ? "red solid 2px"
                    : "rgb(177, 175, 175) solid 2px",
                }}
              />
              <p className="inputtypeError">
                {this.state.emailValidation
                  ? "Please add correct Email/Gmail Address"
                  : ""}
              </p>
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                id="password"
                value={this.state.password}
                className="inputType"
                placeholder="Password"
                onChange={this.onChangeInputType}
                style={{
                  borderBottom: this.state.passwordValidation
                    ? "red solid 2px"
                    : "rgb(177, 175, 175) solid 2px",
                }}
              />
              <p className="inputtypeError">
                {this.state.passwordValidation
                  ? "Password should contains atleast one Number, Capital, Small Letter and Special Char with ( 6 - 16 Characters Only )"
                  : ""}
              </p>
              {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
              <input
                type="password"
                id="confirmPassword"
                value={this.state.confirmPassword}
                className="inputType"
                placeholder="Confirm Password"
                onChange={this.onChangeInputType}
                style={{
                  borderBottom: this.state.confirmPasswordValidation
                    ? "red solid 2px"
                    : "rgb(177, 175, 175) solid 2px",
                }}
              />
              <p className="inputtypeError">
                {this.state.confirmPasswordValidation
                  ? "Password should contains atleast one Number, Capital, Small Letter and Special Char with ( 6 - 16 Characters Only )"
                  : ""}
              </p>
              <p style={{ color: "blue", fontSize: "9px" }}>
                {this.state.bothPasswordValidation
                  ? "Password and Confirm Password must be same!"
                  : ""}
              </p>
              <button
                type="submit"
                className={
                  this.state.buttonEnableValidation
                    ? "submitButtonDisabled"
                    : "submitButton"
                }
                onClick={
                  this.state.buttonEnableValidation ? "" : this.handleSubmit
                }
                title={
                  this.state.buttonEnableValidation
                    ? "Please Fill all the Fields"
                    : "Click here to Signup"
                }
              >
                Signup
              </button>
            </form>
          </article>
        </section>
      </>
    );
  }
}

export default Register;
