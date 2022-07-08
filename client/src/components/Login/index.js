import React, { useState } from "react";
import { Button, TextField, Input, InputAdornment, IconButton, InputLabel, FormControl, FormHelperText } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import './index.css'
import { validateEmail, validatePassword } from "../../utils/utility";
import { useNavigate } from "react-router-dom";


const defaultFieldvalues = {
    email: '',
    password: '',
    showPassword: false
}

export const Login = (props) => {
    const [loginFieldValues, setLoginFieldValues] = useState(defaultFieldvalues);

    const navigate = useNavigate();
    const handleChange = (fieldType) => (event) => {
        setLoginFieldValues({
            ...loginFieldValues,
            [fieldType]: event.target.value
        })
    }

    const handleClickShowPassword = () => {
        setLoginFieldValues({
            ...loginFieldValues,
            showPassword: !loginFieldValues.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLoginClick = async () => {
        if ((validatePassword(loginFieldValues.password) && validateEmail(loginFieldValues.email))) {
            try {
                const response = await signInAuthUserWithEmailAndPassword(
                    loginFieldValues.email,
                    loginFieldValues.password
                );
                navigate('../', { replace: true })
            } catch (error) {
                switch (error.code) {
                    case 'auth/wrong-password':
                        alert('incorrect password for email');
                        break;
                    case 'auth/user-not-found':
                        alert('no user associated with this email');
                        break;
                    default:
                        alert(error);
                }
            }
        }
    }
    const handleCreateNew = () => {
        navigate('../signup', { replace: true });
    }
    return (
        <div className="login-container">
            <div className="login-body-container">
                <div className="login-content">
                    <h1 className="login-text">
                        Login
                    </h1>
                    <div className="login-recommendations-text">
                        Get access to your Orders, Wishlist and Recommendations
                    </div>
                </div>
                <div className="login-form">
                    <TextField id="login-email" required error={loginFieldValues.email ? !validateEmail(loginFieldValues.email): false} variant="standard" label="Email" onChange={handleChange('email')} helperText={loginFieldValues.email && !validateEmail(loginFieldValues.email) ? "You have entered a invalid email" : undefined} />
                    <FormControl required variant="standard" error={loginFieldValues.password ? !validatePassword(loginFieldValues.password) : false}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="login-password"
                            data-testid="login-password-test"
                            variant="standard"
                            type={loginFieldValues.showPassword ? 'text' : 'password'}
                            value={loginFieldValues.password} label="Password"
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        data-testid="show-password-login"
                                    >
                                        {loginFieldValues.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {loginFieldValues.password && !validatePassword(loginFieldValues.password) ? <FormHelperText id="password-error-content">Password must contain Minimum 6 characters,one number and alphabet</FormHelperText> : null}
                    </FormControl>
                    <Button className={"login-button"} type="button" variant="contained" data-testid="login-button-test" onClick={handleLoginClick}>Login</Button>
                    <Button sx={{ marginTop: '10px' }} type="button" variant="contained" data-testid="create-new-button-test" onClick={handleCreateNew}>Create New Account</Button>
                </div>
            </div>
        </div>
    )
}