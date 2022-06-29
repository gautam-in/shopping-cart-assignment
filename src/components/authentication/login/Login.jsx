import React, { useState } from 'react'
import  "./Login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const [formData, setFormaData] = useState({email:"", password:""})
  const [error, setError] = useState({email:"", password:""})

  const navigate = useNavigate()

  const validateForm = () => {
    const validateEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const errorObject = {email:"", password:""}
    if(formData.password.length === 0){
      errorObject.password = "Password must not be empty"
    }
    if(formData.password.includes(" ")){
      errorObject.password = "Password must not contain space"
    }
    if(!validateEmail.test(formData.email)){
      errorObject.email = "Please enter a valid email"
    }
    return errorObject
  }
  const loginClickHandler = (event) => {
    const formError = validateForm()
    if(!formError.email && !formError.password){
      setError(() => ({email:"", password:""}))
      navigate("/")
    }
    else {
      setError(() => formError)
    }
  }
  
  return (
    <main className = "flex login-wrapper">
        <div className = "flex login-header-wrapper">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <form className = "flex login-form-wrapper" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor = "email" className = "login-input">
                <p>Email</p>
                <input type = "email" id = "email" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, email:e.target.value}))}/>
                <p className = "error-message">{error.email}</p>
            </label>
            <label htmlFor = "password" className = "login-input">
                <p>Password</p>
                <input type = "password" id = "password" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, password:e.target.value}))}/>
                <p className = "error-message">{error.password}</p>
            </label>
            <button className = "btn login-form-btn" onClick = { loginClickHandler}>Login</button>
        </form>
    </main>
  )
}

export default Login