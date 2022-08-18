import React, { useEffect, useState } from 'react'
import FormInput from '../formInput/FormInput'
import CustomButton from '../customButton/CustomButton'
import { useNavigate } from 'react-router-dom'

import './signin.style.css'

const SignIn = ( ) => {

  let navigate = useNavigate();
 
  const initialInputState ={
    
    email:'',
    password:'',
  }

  const initialInputErrorState ={
    emailErrorMessage:'',
    passwordErrorMessage:'',
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

  
  function handleSubmit(e){
    e.preventDefault();
      setErrorDataState({
        ...errorDataState,
        emailErrorMessage:!isValidEmail(email)?'Please enter valid email':'',
        passwordErrorMessage:!isValidPassword(password)?'Please enter atleast 6 digits alphanumeric passord':'',
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

  const {  email , password  } = inputData;
  const {  emailErrorMessage , passwordErrorMessage   } = errorDataState;

  return (
    <main>
      <div className='signup'>
        <div className='sign-up_text'>
        <h1>
        SignIn
        </h1>
        <p>We do not share your personal details with anyone</p>
        </div>
        <div className='sign-up_form'>

        
        <form  onSubmit={handleSubmit}>
        
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
        
        <div className='sign-up__button--container'>
        <CustomButton isLargeButton={true}>
          SignIn
        </CustomButton>
        </div>
        

        </form>
        </div>
      </div>
    </main>
  )
}

export  default SignIn