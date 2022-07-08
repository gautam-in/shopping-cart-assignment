import React, { useState } from "react";
import { Button, TextField, Input, InputAdornment, IconButton, InputLabel, FormControl, FormHelperText } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './index.css'
import { validateEmail, validatePassword } from "../../utils/utility";
import { useNavigate } from "react-router-dom";
const defaultFieldvalues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
}
export const Register = (props) => {
    const [signupFieldValues, setSignupFieldValues] = useState(defaultFieldvalues);
    const navigate = useNavigate();
    const handleChange = (fieldType) => (event) => {
        setSignupFieldValues({
            ...signupFieldValues,
            [fieldType]: event.target.value
        })
    }

    const handleClickShowPassword = (showPasswordType) => () => {
        setSignupFieldValues({
            ...signupFieldValues,
            [showPasswordType]: !signupFieldValues[showPasswordType],
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const isSignupAllowed = () => {
        if (!validatePassword(signupFieldValues.password) || signupFieldValues.password !== signupFieldValues.confirmPassword) {
            return false;
        }
        if (!validateEmail(signupFieldValues.email) || signupFieldValues.firstName.length < 3 || signupFieldValues.lastName.length < 3) {
            return false
        }
        return true
    }
    const handleSignupClick = async () => {
        if (isSignupAllowed()) {
            try {
                const { user } = await createAuthUserWithEmailAndPassword(
                    signupFieldValues.email,
                    signupFieldValues.password
                );

                await createUserDocumentFromAuth(user, { displayName: signupFieldValues.firstName + ' ' + signupFieldValues.lastName });
                navigate('../signin', { replace: true })

            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Cannot create user, email already in use');
                } else {
                    alert('user creation encountered an error', error);
                }
            }
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-body-container">
                <div className="signup-content">
                    <h1 className="signup-text">
                        Signup
                    </h1>
                    <div className="signup-recommendations-text">
                        We do not share your personal details with anyone
                    </div>
                </div>
                <div className="signup-form">
                    <TextField  onChange={handleChange('firstName')} value={signupFieldValues.firstName} required id="signup-first-name" error={signupFieldValues.firstName.length ? signupFieldValues.firstName.length < 3 : false} variant="standard" label="First Name" helperText={signupFieldValues.firstName && signupFieldValues.firstName.length < 3 ? "Must contains minimum 3 characters" : ""} />
                    <TextField onChange={handleChange('lastName')} value={signupFieldValues.lastName} required id="signup-last-name" error={signupFieldValues.lastName.length ? signupFieldValues.lastName.length < 3 : false} variant="standard" label="Last Name" helperText={signupFieldValues.lastName && signupFieldValues.lastName.length < 3 ? "Must contains minimum 3 characters" : ""} />
                    <TextField onChange={handleChange('email')} error={signupFieldValues.email.length ? !validateEmail(signupFieldValues.email) : false} id="signup-email" variant="standard" label="Email" helperText={signupFieldValues.email && !validateEmail(signupFieldValues.email) ? "You have entered a invalid email" : undefined} />
                    <FormControl required variant="standard" error={signupFieldValues.password.length ? !validatePassword(signupFieldValues.password) : false}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="signup-password"
                            variant="standard"
                            type={signupFieldValues.showPassword ? 'text' : 'password'}
                            value={signupFieldValues.password}
                            data-testid="signup-password-test"
                            label="Password"
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        data-testid="show-password-signup"
                                        onClick={handleClickShowPassword('showPassword')}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {signupFieldValues.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {signupFieldValues.password && !validatePassword(signupFieldValues.password) ? <FormHelperText id="password-error-content">Password must contain Minimum 6 characters,one number and alphabet</FormHelperText> : null}
                    </FormControl>
                    <FormControl required variant="standard" error={signupFieldValues.confirmPassword && signupFieldValues.password !== signupFieldValues.confirmPassword ? true : false}>
                        <InputLabel htmlFor="standard-adornment-confirm-password">Confirm Password</InputLabel>
                        <Input
                            id="signup-confirm-password"
                            variant="standard"
                            type={signupFieldValues.showConfirmPassword ? 'text' : 'password'}
                            value={signupFieldValues.confirmPassword}
                            label="Confirm Password"
                            data-testid="signup-confirm-password-test"
                            onChange={handleChange('confirmPassword')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle confirm password visibility"
                                        data-testid="show-password-signup"
                                        onClick={handleClickShowPassword('showConfirmPassword')}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {signupFieldValues.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {signupFieldValues.confirmPassword && signupFieldValues.confirmPassword !== signupFieldValues.password ? <FormHelperText id="confirm-password-error-content">Confirm password must match with password</FormHelperText> : null}
                    </FormControl>
                    <Button data-testid="signup-button-test" className="signup-button" variant="contained" style={{ textTransform: 'capitalize' }} onClick={handleSignupClick}>Signup</Button>
                </div>
            </div>
        </div>
    )
}