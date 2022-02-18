import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component';


import './sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  validateInput = () => {
     
    let email=this.state.email;
    let passWord=this.state.password;
  
    if(email.length===0 || passWord.length===0)
    {
      alert((email.length===0? "Username": "Password")+"cannot be empty");
      return false;
    }
    return true;
  
  };
  persistLogin = ( username) => {
    window.localStorage.setItem("username",username);
    
    };

    login = async () => {
  
      let t= this.validateInput();
  
        if(t){
          this.persistLogin(this.state.email);
          alert("Login Successful");
          this.props.history.push('/home');
       }
    };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   this.setState({ email: '', password: '' });
  // };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
          <div className='text'>
        <h2>Login</h2>
        <span>Get access to your Orders ,Wishlist and Recomendation</span>
        </div>
        <form onSubmit={this.login}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <CustomButton type='submit'>Login</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;