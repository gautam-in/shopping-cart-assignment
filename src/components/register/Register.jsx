import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CustomTextField from '../custom/CustomTextField';
import CustomButton from '../custom/CustomButton';
import { checkMissing, validateEmail, validatePassword } from '../../utils/Validation';
import { errorMessage, passwordHelperText, registerText } from '../../constants';
import CustomLink from '../custom/NavLink';

const Register = () => {
    const history = useHistory()
    const [registerForm, setRegisterForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('')

    const validateForm = () => {
        if(!checkMissing(registerForm)){
            setError(errorMessage.missingValueText)
        }
        else if (!validateEmail(registerForm.email)) {
            setError(errorMessage.emailInvalidText)
        } 
        else if(!validatePassword(registerForm.password)){
            setError(errorMessage.passwordInvalidText)
        }
        else if (registerForm.password !== registerForm.confirmPassword) {
            setError(errorMessage.passwordMismatchText)
        }else {
            history.push('/login')
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        validateForm()
    }

    const handleTextChange = (e) => {
        const { id, value } = e.target
        setRegisterForm((prev) => ({
            ...prev,
            [id]: value
        }))
    }

    return <div className="App">
        <div className="flex-div">
            <section className="align-left">
                <h2>Signup</h2>
                <small>{registerText}</small>
            </section>
            <section className="auth-form">
            <div className="align-center" style={{fontSize:14,color:'red'}}>{error}</div>
                <form autoComplete="on">
                    <CustomTextField
                        label="First Name"
                        onChange={handleTextChange}
                        id="firstName" />
                    <CustomTextField
                        label="Last Name"
                        onChange={handleTextChange}
                        id="lastName" />
                    <CustomTextField
                        label="Email"
                        onChange={handleTextChange}
                        id="email"
                        helperText="email@email.com"
                    />
                    <CustomTextField
                        label="Password"
                        type="password"
                        onChange={handleTextChange}
                        id="password"
                        helperText={passwordHelperText}
                    />
                    <CustomTextField
                        label="Confirm Password"
                        type="password"
                        onChange={handleTextChange}
                        id="confirmPassword"
                    />
                    <CustomButton 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleClick} 
                    id="register">
                        Sign In
                    </CustomButton>
                <CustomLink to="/login">Back to Login</CustomLink>
                </form>
            </section>
        </div>

    </div>
}

export default Register;