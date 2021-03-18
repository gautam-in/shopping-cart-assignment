import React from "react";
import TextField from "@material-ui/core/TextField";
import "../login/index.scss";
function postData(data) {
  var axios = require("axios");
  var config = {
    method: "post",
    url: "http://localhost:5000/signup",
    headers: {},
  };

  axios(config)
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
}

function errorMessage(field, error) {
  if (!field && error) return true;
  else return false;
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      pass: "",
      cPass: "",
      email: "",
      error: false,
      errors: {
        email: false,
        pass: false,
        confirmPass: false,
        firstName: false,
        lastName: false,
      },
    };
  }

  checkEmail = (e) => {
    if (!e.target.value.length) {
      return this.setState({
        errors: { email: false },
      });
    }

    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e.target.value
      )
    ) {
      this.setState({
        errors: { email: false },
      });
    } else {
      this.setState({
        errors: { email: true },
      });
    }
  };

  checkPassword = (e) => {
    if (e.target.value.includes(" ")) {
      return;
    } else {
      this.setState({
        pass: e.target.value,
      });
    }

    if (
      /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(e.target.value) &&
      e.target.value.length >= 6
    ) {
      this.setState({
        errors: { pass: false },
      });
    } else {
      this.setState({
        errors: { pass: true },
      });
    }
  };

  checkPasswordC = (e) => {
    this.setState({
      cPass: e.target.value,
    });

    if (this.state.pass === e.target.value) {
      this.setState({
        errors: { confirmPass: false },
      });
    } else {
      this.setState({
        errors: { confirmPass: true },
      });
    }
  };

  handleUserName = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
      error: {
        ...prevState.error,
        [name]: false,
      },
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.pass !== this.state.cPass) {
      this.setState({
        cPass: "",
        errors: {
          confirmPass: true,
        },
      });

      return;
    }

    if (
      !(
        this.state.errors.email ||
        this.state.errors.pass ||
        this.state.errors.confirmPass
      )
    )
      postData(this.state);
    this.props.history.push("home");
  };

  handler = () => {
    if (
      !this.state.email ||
      !this.state.password ||
      !this.state.cPass ||
      !this.state.firstName ||
      !this.state.lastName
    ) {
      this.setState({
        error: true,
      });
      return;
    }
  };

  render() {
    return (
      <div className={"loginContainer"}>
        <div className={"registerMargin"}>
          <span className="login">SignUp</span>
          <span className="login2">
            We do not share your personal details with anyone
          </span>
        </div>
        <div className="text-fields">
          <form onSubmit={this.handleSubmit} className={"form"}>
            <TextField
              required
              onChange={(e) => this.setState({ firstName: e.target.value })}
              id="standard-basic"
              label="First Name"
              name="firstName"
              helperText={
                errorMessage(this.state.firstName, this.state.error)
                  ? "Please enter First Name."
                  : null
              }
              error={errorMessage(this.state.firstName, this.state.error)}
            />
            <TextField
              required
              onChange={(e) => this.setState({ lastName: e.target.value })}
              id="standard-basic"
              label="Last Name"
              name="lastName"
              helperText={
                errorMessage(this.state.lastName, this.state.error)
                  ? "Please enter Last Name."
                  : null
              }
              error={errorMessage(this.state.lastName, this.state.error)}
            />
            <TextField
              onChange={(e) => {
                this.setState({ email: e.target.value });
                this.checkEmail(e);
              }}
              required
              id="standard-basic"
              label="Email"
              type="email"
              name="email"
              error={this.state.errors.email}
              helperText={
                (errorMessage(this.state.email, this.state.error)||this.state.errors.email)
                  ? "Please enter a valid Email."
                  : null
              }
              error={errorMessage(this.state.email, this.state.error)||this.state.errors.email}
            />
            <TextField
              required
              onChange={(e) => {
                this.setState({ password: e.target.value });
                this.checkPassword(e);
              }}
              id="standard-basic"
              label="Password"
              name="password"
              type="password"
              value={this.state.pass}
              error={this.state.errors.pass}
              helperText={
                (errorMessage(this.state.pass, this.state.error)||this.state.errors.pass)
                  ? "Must be of atleast 6 characters(number&alphabets)"
                  : null
              }
              error={errorMessage(this.state.pass, this.state.error)||this.state.errors.pass}
            />
            <TextField
              onChange={(e) => {
                this.setState({ cPass: e.target.value });
                this.checkPasswordC(e);
              }}
              type="password"
              required
              id="standard-basic"
              label="Confirm Password"
              value={this.state.cPass}
              name="confirmPassword"
              error={this.state.errors.confirmPass}
              helperText={
                errorMessage(this.state.cPass, this.state.error)
                  ? "Please confirm the Password."
                  : null
              }
              error={errorMessage(this.state.cPass, this.state.error)}
            />

            <button onClick={this.handler} class="btn" type="submit">
              SignUp
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
