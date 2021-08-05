import React, { useRef } from 'react'
import { set } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { invalidUser, loginText, newAccountText, token } from '../../constants';
import { setAuthenticated } from '../../redux/actions';
import CustomButton from '../custom/CustomButton';
import CustomTextField from '../custom/CustomTextField';
import CustomLink from '../custom/NavLink';
import Toast from '../custom/Toast';
const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState('')
    const [show, setShow] = React.useState(false)
    const errorTextRef = useRef();

    const handleClick = (event) => {
        event.preventDefault();
        const registeredUser = JSON.parse(localStorage.getItem('formData'))
        if ((email === registeredUser.email) && (password === registeredUser.password)) {
            sessionStorage.setItem('auth-token', token);
            dispatch(setAuthenticated(true))
            setShow(true)
            setTimeout(() => {
                history.push('/');
            }, 2000)
        } else {
            console.log(errorTextRef.current)
            errorTextRef.current.focus();
            setError(invalidUser)
        }
    }

    return <div className="App">
        <div className="flex-div">
            <section className="align-left margin-top">
                <h2>Login</h2>
                <small>{loginText}</small>
            </section>
            <section className="auth-form">
                <p tabIndex={1} className="error-text" ref={errorTextRef}>{error}</p>
                <form autoComplete="on">
                    <CustomTextField
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                    />
                    <CustomTextField
                        label="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                    />
                    <CustomButton
                        tabIndex={0}
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                        id="register">
                        Sign In
                    </CustomButton>
                </form>
                <CustomLink to="/register">{newAccountText}</CustomLink>
            </section>
        </div>
        <Toast
            show={show}
            position="top-right"
            description="Welcome, you are successfully Logged In"
            title="Success"
            onClose={() => setShow(false)}
        />
    </div>
}

export default Login