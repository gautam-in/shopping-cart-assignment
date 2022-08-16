import React, { useEffect, useState } from 'react'
import FormInput from '../formInput/FormInput'
import CustomButton from '../customButton/CustomButton'
import { useNavigate } from 'react-router-dom'

import './signup.style.css'

const Register = ( ) => {

  let navigate = useNavigate();
 
  const initialInputState ={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  }

  const initialInputErrorState ={
    firstNameErrorMessage:'',
    lastNameErrorMessage:'',
    emailErrorMessage:'',
    passwordErrorMessage:'',
    confirmPasswordErrorMessage:''
  }
  
  
  const [ inputData , setInputData ] = useState(initialInputState);
  const [errorDataState , setErrorDataState  ] = useState(initialInputErrorState)

  function handleInputChange(event){
    const { name , value } = event.target;
    setInputData({
      ...inputData,
      [name]:value
    })
  }

  function isValidEmail(email){
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return email.match(emailRegex);
  }

  function isValidPassword(password){
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
    return password.match(passwordRegex) 

  }

  function isValidConfirmPassword(password,confirmPassword){
    
    return password === confirmPassword 

  }

  function handleSubmit(e){
    e.preventDefault();
      setErrorDataState({
        ...errorDataState,
        firstNameErrorMessage: !firstName ?'Please enter first Name':'',
        lastNameErrorMessage:!firstName ?'Please enter last Name':'',
        emailErrorMessage:!isValidEmail(email)?'Please enter valid email':'',
        passwordErrorMessage:!isValidPassword(password)?'Please enter atleast 6 digits alphanumeric passord':'',
        confirmPasswordErrorMessage: isValidConfirmPassword(password,confirmPassword) ? 'Both password and confirm password must match' : '' 

      })
      let isInvalidDataPresent = false
      for(let key in errorDataState){
        if(errorDataState[key]){
          isInvalidDataPresent = true;
          break;
        }
      }
      if(!isInvalidDataPresent){
        navigate('/')

      }


    
  }

  const { firstName , lastName , email , password , confirmPassword  } = inputData;
  const { firstNameErrorMessage , lastNameErrorMessage , emailErrorMessage , passwordErrorMessage , confirmPasswordErrorMessage  } = errorDataState;

  return (
    <main>
      <div className='signup'>
        <div className='sign-up_text'>
        <h1>
        Signup
        </h1>
        <p>We do not share your personal details with anyone</p>
        </div>
        <div className='sign-up_form'>

        
        <form  onSubmit={handleSubmit}>
        <FormInput 
        label='First Name'
        type='text'
        
        name='firstName'
        value={firstName}
        onChange={handleInputChange}
        errorMessage={firstNameErrorMessage}
        
        
        />
        <FormInput 
        label='Last Name'
        type='text'
        
        name='lastName'
        value={lastName}
        onChange={handleInputChange}
        errorMessage={lastNameErrorMessage}
        />
        <FormInput 
        label='Email'
        type='text'
        
        name='email'
        value={email}
        onChange={handleInputChange}
        errorMessage={emailErrorMessage}
        />
        <FormInput 
        label='Password'
        type='password'
        
        name='password'
        value={password}
        onChange={handleInputChange}
        errorMessage={passwordErrorMessage}
        />
        <FormInput 
        label='Confirm Password'
        type='password'
        
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleInputChange}
        errorMessage={confirmPasswordErrorMessage}
        />
        <div className='sign-up__button--container'>
        <CustomButton isLargeButton={true}>
          Signup
        </CustomButton>
        </div>
        

        </form>
        </div>
      </div>
    </main>
  )
}

export  default Register