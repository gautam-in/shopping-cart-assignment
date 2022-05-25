import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <div className='container'>
        <div className='login-text'>
          <h2>Login</h2>
          <div>Get access to your Orders. Wishlist and Recommendations</div>
        </div>
        <div className='login-form-container'>
          <div className="material-textfield">
            <input type='text' placeholder=' '></input>
            <label>Email</label>
          </div>
          <div className="material-textfield">
            <input type='password' placeholder=' '></input>
            <label>Password</label>
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
