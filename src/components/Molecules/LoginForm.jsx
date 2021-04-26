import React from 'react';
  
class LoginForm extends React.Component {
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
        input["email"] = "";
        input["password"] = "";
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
              type="email" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              id="email" required="required"
              aria-label="Email"
              aria-required="true"
              />
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
              required="required"
              aria-label="password"
              aria-required="true"
              />
            <span className="highlight"></span><span className="bar"></span>
            <label>Password</label>
            <div className="text-danger">{this.state.errors.password}</div>
          </div>


          <button type="submit" className="btn-primary btn-lg"
          aria-label="Submit Button"
          aria-required="true" > Login </button>
        </form>
      </div>
    );
  }
}
  
export default LoginForm;