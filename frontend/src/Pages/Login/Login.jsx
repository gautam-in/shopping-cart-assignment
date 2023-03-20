import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TextInput from '../../Components/TextInput.js/TextInput';
import './login.scss';
const Login = () => {
  const [user,setUser]=useState({
    email:'',
    password:''
  });
  const[validForm,setValidForm]=useState(false)

  const navigate= useNavigate();
  const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // if(validForm){
  //   console.log(validForm);
  //   document.getElementById('button').disabled=false}

  const loginFormValidate=(e)=>{
   e.preventDefault();
   const validEmail=emailRegex.test(user.email);
   const passwordValid=user.password.length>8;

   setValidForm(validEmail&&passwordValid);
  
   const userFormStorage=JSON.parse(localStorage.getItem('user'));
    setUser({
      email:'',
      password:''
    })
    
    if( (userFormStorage?.email===user.email) && (userFormStorage?.password===user.password))
    {
      navigate('/home')
    }
    else{
      alert('enter correct email and password')
    }
   

  }
 
  return (
    <main className='login-container'>
      <div className="login-container__article">
         <h2>Login</h2>
         <p>Get Access to your Orders, Wishlist and Recommendations</p>
      </div>
      <form className='login-container__form' onSubmit={loginFormValidate}>
        <TextInput type='email' label='Email'name='email' value={user.email} changeHandler={setUser}/>
        <TextInput type='password' label='Password' name='password' value={user.password} changeHandler={setUser}/>
        <button type='submit' id='button' >Login</button>
      </form>
    </main>
  )
}

export default Login