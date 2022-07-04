import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  "../login/Login.css"
import  "./Signup.css"
import { TogglePasswordDisplay } from "./../../index-components"
const Signup = () => {
    const [formData, setFormaData] = useState({firstName: "", lastName: "", email: "", password: "", confirmPassword: ""})
    const [error, setError] = useState({})

  const navigate = useNavigate()

  const validateForm = () => {
    const errorObject = {}
    const validatePassword = /^(?!.* )(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    const validateEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(formData.firstName.length < 1){
      errorObject["firstName"] = "Enter valid first name"
    }
    if(formData.lastName.length < 1){
        errorObject["lastName"] = "Enter valid last name"
      }
      if(!validateEmail.test(formData.email)){
        errorObject["email"] = "Please enter a valid email"
      }
    if(!validatePassword.test(formData.password)){
        errorObject["pwd"] = "Password must contain one character and a number and at least six characters with no space"
    }
    if(formData.confirmPassword === ""){
      errorObject["confirmPwd"] = "Please enter password again"
    }
    return errorObject
  }
  const loginClickHandler = () => {
    const formError = validateForm()
    if(Object.values(formError).length < 1 && error.confirmPwd === ""){
      setError(() => ({}))
      navigate("/")
    }
    else {
      setError((prev) => ({...prev, ...formError}))
    }
  }
  return (
    <main className = "flex login-wrapper bg-color">
        <div className = "flex login-header-wrapper">
          <h2>Signup</h2>
          <p>We do not share your personal details with anyone</p>
        </div>
        <form className = "flex login-form-wrapper signup-form-wrapper" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor = "first-name" className = "login-input">
                <p>First Name</p>
                <input type = "text" id = "first-name" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, firstName:e.target.value}))}/>
            </label>
            <p className = "error-message">{error?.firstName}</p>
            <label htmlFor = "last-name" className = "login-input">
                <p>Last Name</p>
                <input type = "text" id = "last-name" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, lastName:e.target.value}))}/>
            </label>
            <p className = "error-message">{error?.lastName}</p>
            <label htmlFor = "email" className = "login-input">
                <p>Email</p>
                <input type = "email" id = "email" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, email:e.target.value}))}/>
            </label>
            <p className = "error-message">{error?.email}</p>
            <label htmlFor = "password" className = "login-input relative">
                <p>Password</p>
                <TogglePasswordDisplay setFormaData = { setFormaData } id = {"password"} formData = {formData} setError = {setError}/>
            </label>
            <p className = "error-message">{error?.pwd}</p>

            <label htmlFor = "confirm-password" className = "login-input">
                <p>Confirm Password</p>
                <TogglePasswordDisplay setFormaData = { setFormaData } id = {"confirm-password"} formData = {formData} setError = {setError}/>
            </label>
            <p className = "error-message">{error?.confirmPwd}</p>
            <button className = "btn login-form-btn signup-form-btn" onClick = { loginClickHandler}>Signup</button>
        </form>
    </main>
  )
}

export default Signup