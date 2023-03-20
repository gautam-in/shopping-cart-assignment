import React, { useState } from 'react';
import TextInput from '../../../Components/TextInput.js/TextInput';
import './Register.scss';
import { getItemFromLocalstorage, register } from '../../../store/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [user,setUser]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    errors:{}
  });
  const navigate=useNavigate();
  const dispatch= useDispatch();
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!user.firstName) {
      formIsValid = false;
       errors["firstName"] = "Please enter your First Name";
    }
    if (!user.lastName) {
      formIsValid = false;
      errors["lastName"] = "Please enter your Last Name";
    }

    if (user.email === "") {
      formIsValid = false;
      errors["email"] = "Please enter your email address";
    }
    if (user.email) {
      //regular expression for email validation
      let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!pattern.test(user.email)) {
        formIsValid = false;
        errors["email"] = "Please enter valid email address";
      }
    }
    if (!user.password) {
      formIsValid = false;
      errors["password"] = "Please enter your password";
    }
    if (!user.confirmPassword) {
      formIsValid = false;
      errors["confirmPassword"] = "Please confirm your password";
    }

    if (user.password) {
      if (!user.password.match(/^.*(?=.*[a-z])(?=.*[0-9])(?=.{6,}).*$/)) {
        formIsValid = false;
        errors["password"] =
          "Password should have minimum 6 charecters and should contain numbers and alphabet";
      }
    }

    if (user.confirmPassword) {
      if (
        !user.confirmPassword.match(/^.*(?=.*[a-z])(?=.*[0-9])(?=.{6,}).*$/)
      ) {
        formIsValid = false;
        errors["confirmPassword"] =
          "Password should have minimum 6 charecters and should contain numbers and alphabet";
      }
    }

    if (user.password && user.confirmPassword) {
      if (user.password != user.confirmPassword) {
        errors["confirmPassword"] = "Password did not match";
      } else {
        errors["confirmPassword"] = "";
      }
    }

    return formIsValid;
  };

  const registerFormValidate=(e)=>{
    e.preventDefault();
     if(validateForm()){
        dispatch(register(user));
        alert('registration successful');
        navigate('/signin')
     }
     else{
      alert('enter correct details')
     }
    
  }

 
   return (
    <main className='register-container'>
      <div className="register-container__article">
         <h2>Register</h2>
         <p>Get Access to your Orders, Wishlist and Recommendations</p>
      </div>
      <form className='register-container__form' onSubmit={registerFormValidate}>
    
        <TextInput type='text' label='First Name'  name='firstName' value={user.firstName} changeHandler={setUser} error={user.errors.firstName}/>
        <TextInput type='text' label='Last Name' name='lastName' value={user.lastName} changeHandler={setUser} error={user.errors.lastName}/>
        <TextInput type='email' label='Email'name='email' value={user.email} changeHandler={setUser} error={user.errors.firstName}/>
        <TextInput type='password' label='Password' name='password' value={user.password} changeHandler={setUser}/>
        <TextInput type='password' label='Confirm Password' name='confirmPassword' value={user.confirmPassword} changeHandler={setUser}/>
        <button type='submit'>Register</button>
      </form>
    </main>
  )
}

export default Register