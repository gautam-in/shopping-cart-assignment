import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState)
  }

  const handleUserInput = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className='login'>
      <div className='container'>
        <div className='login-text'>
          <h2>Login</h2>
          <div>Get access to your Orders. Wishlist and Recommendations</div>
        </div>
        <div className='login-form-container'>
          <form onSubmit={handleSubmit}>
            <div className="material-textfield">
              <input type='text' name='email' required placeholder=' ' onChange={handleUserInput} pattern='[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}' ></input>
              <label>Email</label>
            </div>
            <div className="material-textfield">
              <input type='password' name='password' required placeholder=' ' onChange={handleUserInput}></input>
              <label>Password</label>
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
