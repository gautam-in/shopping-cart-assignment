import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className='signup'>
      <div className='container'>
        <div className='signup-text'>
          <h2>Signup</h2>
          <div>We do not share your personal details with anyone.</div>
        </div>
        <div className='signup-form-container'>
          <div className="material-textfield">
            <input type='text' placeholder=' '></input>
            <label>First Name</label>
          </div>
          <div className="material-textfield">
            <input type='text' placeholder=' '></input>
            <label>Last Name</label>
          </div>
          <div className="material-textfield">
            <input type='text' placeholder=' '></input>
            <label>Email</label>
          </div>
          <div className="material-textfield">
            <input type='password' placeholder=' '></input>
            <label>Password</label>
          </div>
          <div className="material-textfield">
            <input type='text' placeholder=' '></input>
            <label>Confirm Password</label>
          </div>
          <button>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Signup