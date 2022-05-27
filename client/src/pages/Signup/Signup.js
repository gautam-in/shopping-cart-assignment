import React, { useState } from 'react'
import './Signup.css'

function Signup() {
  const [formState, setFormState] = useState({
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
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
    <div className='signup'>
      <div className='container'>
        <div className='signup-text'>
          <h2>Signup</h2>
          <div>We do not share your personal details with anyone.</div>
        </div>
        <div className='signup-form-container'>
          <form onSubmit={handleSubmit}>
            <div className="material-textfield">
              <input type='text' name='firstName' required placeholder=' ' onChange={handleUserInput} ></input>
              <label>First Name</label>
            </div>
            <div className="material-textfield">
              <input type='text' name='lastName' required placeholder=' ' onChange={handleUserInput} ></input>
              <label>Last Name</label>
            </div>
            <div className="material-textfield">
              <input type='text' name='email' required placeholder=' ' onChange={handleUserInput} pattern='[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}' ></input>
              <label>Email</label>
            </div>
            <div className="material-textfield">
              <input type='password' name='password' required placeholder=' ' onChange={handleUserInput} ></input>
              <label>Password</label>
            </div>
            <div className="material-textfield">
              <input type='password' name='confirmPassword' required placeholder=' ' onChange={handleUserInput} ></input>
              <label>Confirm Password</label>
            </div>
            <button type='submit'>Signup</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup