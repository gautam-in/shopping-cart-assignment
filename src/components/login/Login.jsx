import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { hardcodedCred, invalidUser, loginText, newAccountText, token } from '../../constants';
import { setAuthenticated } from '../../redux/actions';
import CustomButton from '../custom/CustomButton';
import CustomTextField from '../custom/CustomTextField';
import CustomLink from '../custom/NavLink';

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState('')

    const handleClick = (event) => {
        event.preventDefault();
        if ((email === hardcodedCred.email) && (password === hardcodedCred.password)) {
            sessionStorage.setItem('auth-token', token);
            dispatch(setAuthenticated(true))
            history.goBack();
        } else {
            setError(invalidUser)
        }
    }

    return <div className="App">
        <div className="flex-div">
            <section className="align-left">
                <h2>Login</h2>
                <small>{loginText}</small>
            </section>
            <section className="auth-form">
                <div className="error-text">{error}</div>
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
    </div>
}

export default Login