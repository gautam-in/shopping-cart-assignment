import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

function Login() {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })
  const [formErrorState, setFormErrorState] = useState({
    email: '',
    password: ''
  })
  const history = useHistory()

  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/
  const passwordPattern = /[a-zA-Z0-9]{6}/
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValidation()) {
      console.log(formState)
      history.push('/home')
    }
  }

  const formValidation = () => {
    for(let key in formState) {
      if (formState[key] == '') {
        setFormErrorState((prevState) => ({
          ...prevState,
          [key]: `please fill the ${key} field`
        }))
      }
    }

    if ((formState.email != '')) {
      if (formState.email.search(emailPattern) < 0) {
        setFormErrorState((prevState) => ({
          ...prevState,
          email: 'incorrect email'
        }))
      } else {
        setFormErrorState((prevState) => ({
          ...prevState,
          email: ''
        }))
      }
    }

    if ((formState.password != '')) {
      if (formState.password.length < 6) {
        setFormErrorState((prevState) => ({
          ...prevState,
          password: 'password should contain minimum 6 characters'
        }))
      } else if (formState.password.search(/\s/) >= 0) {
        setFormErrorState((prevState) => ({
          ...prevState,
          password: 'password should not contain space'
        }))
      } else if (formState.password.search(passwordPattern) < 0) {
        setFormErrorState((prevState) => ({
          ...prevState,
          password: 'password should contain a number and alphabet'
        }))
      } else {
        setFormErrorState((prevState) => ({
          ...prevState,
          password: ''
        }))
        return true;
      }
    }

    return false;
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
              <input
                type='text'
                aria-labelledby='email-label'
                name='email'
                placeholder=' '
                onChange={handleUserInput}
              />
              <label id='email-label'>Email</label>
              {
                formErrorState.email &&
                <small>{formErrorState.email}</small>
              }
            </div>
            <div className="material-textfield">
              <input
                type='password'
                aria-labelledby='password-label'
                id='password'
                name='password'
                placeholder=' '
                onChange={handleUserInput}
              />
              <label id='password-label'>Password</label>
              {
                formErrorState.password &&
                <small>{formErrorState.password}</small>
              }
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
