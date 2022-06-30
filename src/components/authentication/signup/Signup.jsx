import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  "../login/Login.css"
import  "./Signup.css"

const Signup = () => {
    const [formData, setFormaData] = useState({firstName: "", lastName: "", email: "", password: "", confirmPassword: ""})
    const [error, setError] = useState({})

  const navigate = useNavigate()

  const validateForm = () => {
    const errorObject = {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""}
    const checkSingleChar = /[a-zA-Z]/g
    const testNumber = /\d/g
    const validateEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(formData.firstName.length < 1){
      errorObject.firstName = "Enter valid first name"
    }
    if(formData.lastName.length < 1){
        errorObject.lastName = "Enter valid last name"
      }
      if(!validateEmail.test(formData.email)){
        errorObject.email = "Please enter a valid email"
      }
    if((!checkSingleChar.test(formData.password) && !testNumber.test(formData.password)) || formData.password.length < 6){
        errorObject.password = "Password must contain one character and a number and at least six characters"
    }
    if(formData.password !== formData.confirmPassword){
        errorObject.confirmPassword= "Both passwords should be same"
    }
    return errorObject
  }
  const loginClickHandler = () => {
    const formError = validateForm()
    if(Object.values(formError).length < 1){
      setError(() => ({}))
      navigate("/")
    }
    else {
      setError(() => formError)
    }
  }
  return (
    <main className = "flex login-wrapper">
        <div className = "flex login-header-wrapper">
          <h2>Signup</h2>
          <p>We do not share your personal details with anyone</p>
        </div>
        <form className = "flex login-form-wrapper signup-form-wrapper" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor = "email" className = "login-input">
                <p>First Name</p>
                <input type = "text" id = "email" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, firstName:e.target.value}))}/>
                <p className = "error-message">{error?.firstName}</p>
            </label>
            <label htmlFor = "password" className = "login-input">
                <p>Last Name</p>
                <input type = "text" id = "password" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, lastName:e.target.value}))}/>
                <p className = "error-message">{error?.lastName}</p>
            </label>
            <label htmlFor = "password" className = "login-input">
                <p>Email</p>
                <input type = "email" id = "password" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, email:e.target.value}))}/>
                <p className = "error-message">{error?.email}</p>
            </label>
            <label htmlFor = "password" className = "login-input">
                <p>Password</p>
                <input type = "password" id = "password" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, password:e.target.value}))}/>
                <p className = "error-message">{error?.passwordError}</p>
            </label>
            <label htmlFor = "password" className = "login-input">
                <p>Confirm Password</p>
                <input type = "password" id = "password" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, confirmPassword:e.target.value}))}/>
                <p className = "error-message">{error?.confirmPassword}</p>
            </label>
            <button className = "btn login-form-btn signup-form-btn" onClick = { loginClickHandler}>Signup</button>
        </form>
    </main>
  )
}

export default Signup