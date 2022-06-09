import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Signup.css'

function Signup() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [formErrorState, setFormErrorState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  const handleUserInput = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  const formValidation = () => {
    let isFirstNameValid = false,
    isLastNameValid = false,
    isEmailValid = false,
    isPasswordValid = false,
    isConfirmPasswordValid = false;

    for(let key in formState) {
      if (formState[key] == '') {
        setFormErrorState((prevState) => ({
          ...prevState,
          [key]: `please fill the ${key} field`
        }))
      } else if(key == 'firstName') {
        setFormErrorState((prevState) => ({
          ...prevState,
          [key]: ''
        }))
        isFirstNameValid = true
      } else if(key == 'lastName') {
        setFormErrorState((prevState) => ({
          ...prevState,
          [key]: ''
        }))
        isLastNameValid = true
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
        isEmailValid = true
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
        isPasswordValid = true
      }
    }

    if ((formState.confirmPassword != '')) {
      if (formState.confirmPassword.length < 6) {
        setFormErrorState((prevState) => ({
          ...prevState,
          confirmPassword: 'confirm password should contain minimum 6 characters'
        }))
      } else if (formState.confirmPassword.search(/\s/) >= 0) {
        setFormErrorState((prevState) => ({
          ...prevState,
          confirmPassword: 'confirm password should not contain space'
        }))
      } else if (formState.confirmPassword.search(passwordPattern) < 0) {
        setFormErrorState((prevState) => ({
          ...prevState,
          confirmPassword: 'confirm password should contain a number and alphabet'
        }))
      } else {
        setFormErrorState((prevState) => ({
          ...prevState,
          confirmPassword: ''
        }))
        isConfirmPasswordValid = true
      }
    }

    if (isConfirmPasswordValid && isPasswordValid) {
      if (formState.confirmPassword !== formState.password) {
        setFormErrorState((prevState) => ({
          ...prevState,
          confirmPassword: 'confirm password did not match'
        }))
        isConfirmPasswordValid = false
      }
    }

    return isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
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
              <input
                type='text'
                name='firstName'
                placeholder=' '
                onChange={handleUserInput}
                aria-labelledby='first-name-label'
              />
              <label id='first-name-label'>First Name</label>
              {
                formErrorState.firstName &&
                <small>{formErrorState.firstName}</small>
              }
            </div>
            <div className="material-textfield">
              <input
                type='text'
                name='lastName'
                placeholder=' '
                onChange={handleUserInput}
                aria-labelledby='last-name-label'
              />
              <label id='last-name-label'>Last Name</label>
              {
                formErrorState.lastName &&
                <small>{formErrorState.lastName}</small>
              }
            </div>
            <div className="material-textfield">
              <input
                type='text'
                name='email'
                placeholder=' '
                onChange={handleUserInput}
                aria-labelledby='email-label'
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
                name='password'
                placeholder=' '
                onChange={handleUserInput}
                aria-labelledby='password-label'
              />
              <label id='password-label'>Password</label>
              {
                formErrorState.password &&
                <small>{formErrorState.password}</small>
              }
            </div>
            <div className="material-textfield">
              <input
                type='password'
                name='confirmPassword'
                placeholder=' '
                onChange={handleUserInput}
                aria-labelledby='confirm-password-label'
              />
              <label id='confirm-password-label'>Confirm Password</label>
              {
                formErrorState.confirmPassword &&
                <small>{formErrorState.confirmPassword}</small>
              }
            </div>
            <button type='submit'>Signup</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
