import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { emailValidation } from "../commonData/index";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailValidation: "",
      buttonEnableValidation: true,
      errorMessageOnScreen: "",
    };
  }

  validation = (data, id) => {
    if (id === "email") {
      if (emailValidation(data)) {
        this.setState({
          emailValidation: false,
        });
      } else {
        this.setState({
          emailValidation: true,
        });
      }
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
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let tempEmail = this.state.email;
    let tempPass = this.state.password;
    let userExist = sessionStorage.getItem(tempEmail);
    if (userExist !== null) {
      if (tempPass === userExist) {
        console.log("Success");
        sessionStorage.setItem("currentUser", this.state.email);
        this.props.history.push("/products");
      } else {
        console.log("InCorrect Password");
        this.setState({
          errorMessageOnScreen: "InCorrect Password, Please Try Again!",
        });
        toast.warn("InCorrect Password, Please Try Again!");
      }
    } else {
      console.log("User does not exist");
      this.setState({
        errorMessageOnScreen:
          "User does not exist, Please Click here to Create an Account!",
        email: "",
        password: "",
      });
      toast.error("User does not exist, Please Create an Account");
    }
  };

  buttonEnableValidation = () => {
    if (
      this.state.email &&
      this.state.password &&
      !this.state.emailValidation
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
      <div>
        <section className="loginContainer">
          <div className="loginLeftSide">
            <h1 className="loginTitle">Login</h1>
            <p className="loginPara">
              Get Access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <div className="loginRightSide">
            <form autoComplete="off">
              {/* <label htmlFor="firstName">First Name</label> */}
              <input
                type="email"
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
              {/* <label htmlFor="lastName">Last Name</label> */}
              <input
                type="password"
                id="password"
                value={this.state.password}
                className="inputType"
                placeholder="Password"
                onChange={this.onChangeInputType}
              />
              <button
                type="submit"
                className={
                  this.state.buttonEnableValidation
                    ? "submitButtonDisabled"
                    : "submitButton"
                }
                onClick={this.handleSubmit}
                title={
                  this.state.buttonEnableValidation
                    ? "Please Fill all the Fields"
                    : "Click here to Login"
                }
              >
                Login
              </button>
              <Link
                to={
                  this.state.errorMessageOnScreen ===
                  "InCorrect Password, Please Try Again!"
                    ? "/signin"
                    : "/signup"
                }
                style={{
                  padding: "2px 0px ",
                  marginTop: "6px",
                  color: "red",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                {this.state.errorMessageOnScreen
                  ? this.state.errorMessageOnScreen
                  : ""}
              </Link>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
