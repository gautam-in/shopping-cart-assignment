import React from 'react'
import Logincss from "./Login.css"
const Login = () => {
  return (
    <main className = "flex login-wrapper">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
        <form className = "flex login-form-wrapper">
            <label htmlFor = "email" className = "login-input">
                <p>Email</p>
                <input type = "email" id = "email" className = "login-form-input"/>
            </label>
            <label htmlFor = "password" className = "login-input">
                <p>Password</p>
                <input type = "password" id = "password" className = "login-form-input"/>
            </label>
            <button className = "btn login-form-btn">Login</button>
        </form>
    </main>
  )
}

export default Login