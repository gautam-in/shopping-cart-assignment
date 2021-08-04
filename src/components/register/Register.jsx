import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomTextField from '../custom/CustomTextField';
import CustomButton from '../custom/CustomButton';
import { checkMissing, validateEmail, validatePassword } from '../../utils/Validation';
import { errorMessage, passwordHelperText, registerText } from '../../constants';
import CustomLink from '../custom/NavLink';
import { useRef } from 'react';
import Toast from '../custom/Toast';

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
    const errorTextRef = useRef();
    const [show, setShow] = useState(false)

    const validateForm = () => {
        if (!checkMissing(registerForm)) {
            errorTextRef.current.focus();
            setError(errorMessage.missingValueText)
        }
        else if (!validateEmail(registerForm.email)) {
            errorTextRef.current.focus();
            setError(errorMessage.emailInvalidText)
        }
        else if (!validatePassword(registerForm.password)) {
            errorTextRef.current.focus();
            setError(`${errorMessage.passwordInvalidText} - ${passwordHelperText}`)
        }
        else if (registerForm.password !== registerForm.confirmPassword) {
            errorTextRef.current.focus();
            setError(errorMessage.passwordMismatchText)
        } else {
            localStorage.setItem('formData', JSON.stringify(registerForm))
            setShow(true)
            setTimeout(() => {
                history.push('/login')
            }, 2000)
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
                <p ref={errorTextRef} tabIndex={1} className="align-center" style={{ fontSize: 14, color: 'red' }}>{error}</p>
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
                        tabIndex={0}
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
        <Toast
            show={show}
            position="top-left"
            description="User Registered"
            title="Success"
            onClose={() => setShow(false)}
        />
    </div>
}

export default Register;