import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }



  validateInput = () => {
    let firstname=this.state.firstName;
    let lastname=this.state.lastName;

    let email = this.state.email;
    let pword = this.state.password;
    let cPassword = this.state.confirmPassword;

    if (email.length === 0 ||firstname.length===0||lastname.length===0|| pword.length === 0 || cPassword.length === 0) {
     
      alert(
        (email.length === 0
          ? "email"
          : cPassword.length === 0
          ? "Confirm password"
          :firstname.length===0
          ? "firstname"
          :lastname.length===0
          ? "lastname"
          : "Password") + " cannot be empty"
      );
      return false;
    }
	
	
    // if (firstname.length <= 1 || email.length >= 5 || lastname.length<=1) {
    //   alert("username must have  6-32 characters");
    //   return false;
    // }

    if (pword.length <= 6 || pword.length >= 32) {
      alert("Password must have 6-32 characters");
      return false;
    }
    if (pword !== cPassword) {
      alert("password and confirm passwords must be equal");
      return false;
    } else {
      return true;
    }
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      this.state;

   

      let response = this.validateInput();
     
      if (response) {
       alert("Registered successfully");
      
        
        this.props.history.push("/signin");
      }
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });



   
  };

  
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <div>
          <h2 className="title">Register</h2>
          <span>We donot share your pesonal details with anyone</span>
        </div>
        <form class="form" onSubmit={this.handleSubmit}>
          <FormInput
            name="firstName"
            type="text"
            handleChange={this.handleChange}
            value={this.state.firstName}
            label="First Name"
            required
          />



          <FormInput
            name="lastName"
            type="text"
            handleChange={this.handleChange}
            value={this.state.lastName}
            label="Last Name"
            required
          />

          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
