import React from "react";
import "../login/index.scss";
import TextField from "@material-ui/core/TextField";


class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: {
        first_name: false,
        last_name: false,
        email: false,
        pass: false,
        confirm_password: false,
      },
      input : {},
      errorMsg : {}
    };
  }


  handleChange =(event)=> {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }

  validate =()=>{
    let errorMsg = {};
    let input = this.state.input;
    let isValid = true;
 
    if (!input["first_name"]) {
      isValid = false;
      errorMsg["first_name"] = "Please enter your first name.";
    }

    if (typeof input["first_name"] !== "undefined") {
      const re = /^\S*$/;
      if(input["first_name"].length < 6 || !re.test(input["first_name"])){
          isValid = false;
          errorMsg["first_name"] = "Please enter valid first name.";
      }
    }

    if (!input["last_name"]) {
      isValid = false;
      errorMsg["last_name"] = "Please enter your last name.";
    }

    if (typeof input["last_name"] !== "undefined") {
      const re = /^\S*$/;
      if(input["last_name"].length < 6 || !re.test(input["last_name"])){
          isValid = false;
          errorMsg["last_name"] = "Please enter valid last name.";
      }
    }

    if (!input["email"]) {
      isValid = false;
      errorMsg["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errorMsg["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errorMsg["password"] = "Please enter your password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errorMsg["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof input["password"] !== "undefined") {
      if(input["password"].length < 6){
          isValid = false;
          errorMsg["password"] = "Please add at least 6 charachter.";
      }
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errorMsg["password"] = "Passwords don't match.";
      }
    }

    this.setState({
      errorMsg: errorMsg
    });

    return isValid;
  }


  handleSubmit = (e) => {
    e.preventDefault();

    if(this.validate()){
      let input = {};
      input["last_name"] = "";
      input["first_name"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({input:input});
      this.props.history.push("home");
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
              onChange = {this.handleChange}
              required
              id="standard-basic"
              label="First Name"
              name="first_name"
              value={this.state.input.first_name}
              error = {this.state.errorMsg.first_name===""? false : this.state.errorMsg.first_name}
              helperText= {this.state.errorMsg.first_name}
            />
            <TextField
              onChange = {this.handleChange}
              required
              id="standard-basic"
              label="Last Name"
              name="last_name"
              value={this.state.input.last_name}
              error = {this.state.errorMsg.last_name === "" ? false : this.state.errorMsg.last_name}
              helperText={this.state.errorMsg.last_name}
            />
            <TextField
              onChange = {this.handleChange}
              required
              id="standard-basic"
              label="Email"
              type="email"
              name="email"
              value={this.state.input.email}
              error={this.state.errorMsg.email === "" ? false : this.state.errorMsg.email }
              helperText = {this.state.errorMsg.email}
            />
            <TextField
              onChange = {this.handleChange}
              required
              id="standard-basic"
              label="Password"
              name="password"
              type="password"
              value={this.state.input.password}
              error={this.state.errorMsg.password === "" ? false : this.state.errorMsg.password}
              helperText={this.state.errorMsg.password}
            />
            <TextField
              onChange = {this.handleChange}
              type="password"
              required
              id="standard-basic"
              label="Confirm Password"
              value={this.state.input.confirm_password}
              name="confirm_password"
              error={this.state.errorMsg.confirm_password === "" ? false : this.state.errorMsg.confirm_password}
              helperText={this.state.errorMsg.confirm_password}
            />

            <button class="btn" type="submit">
              SignUp
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
