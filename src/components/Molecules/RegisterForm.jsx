import React from 'react';
  
class RegisterForm extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["last_name"] = "";
        input["first_name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
        
        /**
         * Actions on successful registration datat received
         * 
         * Here we simply display an alert
         * 
         * We may call an API to save details to database
         */
        alert('Form is submitted  successfully!');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["first_name"]) {
        isValid = false;
        errors["first_name"] = "Please enter your first name.";
      }
  
      if (typeof input["first_name"] !== "undefined") {
        const re = /^\S*$/;
        if(input["first_name"].length < 6 || !re.test(input["first_name"])){
            isValid = false;
            errors["first_name"] = "Please enter valid first name.";
        }
      }

      if (!input["last_name"]) {
        isValid = false;
        errors["last_name"] = "Please enter your last name.";
      }
  
      if (typeof input["last_name"] !== "undefined") {
        const re = /^\S*$/;
        if(input["last_name"].length < 6 || !re.test(input["last_name"])){
            isValid = false;
            errors["last_name"] = "Please enter valid last name.";
        }
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="group">
            <input 
              type="text" 
              name="first_name" 
              value={this.state.input.first_name}
              onChange={this.handleChange}
              id="first_name" required="required" />
            <span className="highlight"></span><span className="bar"></span>
            <label>First Name</label>
            <div className="text-danger">{this.state.errors.first_name}</div>
          </div>

          <div className="group">
            <input 
              type="text" 
              name="last_name" 
              value={this.state.input.last_name}
              onChange={this.handleChange}
              id="last_name" required="required" />
            <span className="highlight"></span><span className="bar"></span>
            <label>Last Name</label>
            <div className="text-danger">{this.state.errors.last_name}</div>
          </div>
          
          <div className="group">
            <input 
              type="email" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              id="email" required="required" />
            <span className="highlight"></span><span className="bar"></span>
            <label>Email</label>
            <div className="text-danger">{this.state.errors.email}</div>
          </div>
          <div className="group">
            <input type="password" 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              id="password" 
              required="required"/>
            <span className="highlight"></span><span className="bar"></span>
            <label>Password</label>
            <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <div className="group">
            <input type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              id="confirm_password"
              required="required"/>
            <span className="highlight"></span><span className="bar"></span>
            <label>Confirm Password</label>
          </div>

          <input type="submit" value="Signup" className="btn-primary btn-lg" />
        </form>
      </div>
    );
  }
}
  
export default RegisterForm;