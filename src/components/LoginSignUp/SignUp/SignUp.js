import { Button } from 'antd';
import React from 'react';
import FormInput from '../../FOrmInput/FormInput';
import '../LoginComponent/logincomponent.styles.scss';

import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils'
import { Link } from 'react-router-dom';


class SignUpComponent extends React.Component {

  state = {
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async event => {
    event.preventDefault();
    console.log("working")

    const { firstname,lastname, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { firstname});
      this.props.history.push('/');

      this.setState({
        firstname: '',
        lastname:'',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };


  handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }
  render() {
    const {firstname,lastname, email, password, confirmPassword } = this.state;
    const {onclickOfSignuprlogin} = this.props;
    return (
      <div className='signIn-signUp flex'>
        <div className='right-container'>
          <h2 className='title'>SignUp</h2>
          <p>We don't share your personal detailes with anyone.</p>
        </div>

        <form className='sign-up-form left-container' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='firstname'
            value={firstname}
            onChange={this.handleChange}
            label='First Name'
            required
          />
          <FormInput
            type='text'
            name='lastname'
            value={lastname}
            onChange={this.handleChange}
            label="Last Name"
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
         <button type='submit' className='sbmt-btn'>Sign Up</button>
         <div className='login_info'>already have an account?<Link to="/login"><span  onClick={()=>{onclickOfSignuprlogin(false)}}>login</span></Link></div> 
        </form>
      </div>
    )
  }
}

export default SignUpComponent;