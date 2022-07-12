import React, { useState } from 'react'
import  "./Login.css"
import { useNavigate } from 'react-router-dom'
import { validateLoginForm } from './validateLoginForm.jsx'

const Login = () => {

  const [formData, setFormaData] = useState({email:"", password:""})
  const [error, setError] = useState({})

  const navigate = useNavigate()

  const loginClickHandler = () => {
    const formError = validateLoginForm(formData)
    if(Object.keys(formError).length < 1){
      setError(() => ({}))
      navigate("/")
    }
    else {
      setError(() => formError)
    }
  }
  
  return (
    <main className = "flex login-wrapper bg-color" data-testid = "login-form">
        <div className = "flex login-header-wrapper">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <form className = "flex login-form-wrapper" onSubmit={(e) => e.preventDefault()}>
            <p>All fields marked with an asterisk(*) are required</p>
            <label htmlFor = "email" className = "login-input">
                <p>Email <span aria-hidden = "true"className = "error-message">*</span></p>
                <input type = "email" id = "email" data-testid = "email" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, email:e.target.value}))} required/>
                {error.email && <p className = "error-message" data-testid = "email-error"><span className = "warning-sign">&#9888;</span> {error.email}</p>}

            </label>
            
            <label htmlFor = "password" className = "login-input">
                <p>Password<span aria-hidden = "true" className = "error-message">*</span></p>
                <input type = "password" id = "password" data-testid = "password" className = "login-form-input" onChange = {(e) => setFormaData((prev) => ({...prev, password:e.target.value}))} required/>
                {error.pwd && <p className = "error-message" data-testid = "pwd-error"><span className = "warning-sign">&#9888;</span> {error.pwd}</p>}
            </label>
            <button className = "btn login-form-btn" onClick = { loginClickHandler}>Login</button>
        </form>
    </main>
  )
}

export default Login