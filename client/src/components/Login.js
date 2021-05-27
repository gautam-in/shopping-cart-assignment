import React, { useState } from 'react'

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        if(e.target.name === 'email') {
            const email = e.target.value ? e.target.value.toString().trim() : '';
            setEmail(email);
            const regex = /^[a-z0-9]+@([a-z0-9]{2,10}(\.))*[a-z]{2,10}$/;
            const isValid = regex.test(email);
            if(email === '') {
                setEmailError('Email is required');
            } else if(!isValid) {
                setEmailError('Invalid Email');
            } else {
                setEmailError(null);
            }
        }

        if(e.target.name === 'password') {
            const password = e.target.value ? e.target.value.toString().trim() : '';
            setPassword(password);
            const regex = /^[a-z0-9]{6,20}$/;
            const isValid = regex.test(password);
            if(password === '') {
                setPasswordError('Password is required');
            } else if(!isValid) {
                setPasswordError('Invalid Password');
            } else {
                setPasswordError(null);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/');
    }

    return (
        <section className="login-section">
            <div className="login-info">
                <h1>Login</h1>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="login-form">
                <form onSubmit = {handleSubmit} autoComplete = "off">
                    <div className="input-field">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="validate"
                            value = {email}
                            required = {true}
                            onChange={handleChange} />
                            {emailError !== null && <div className = "error-message">
                                {emailError}
                            </div>}
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input 
                        id="password" 
                        type="text" 
                        name = "password"
                        className="validate"
                        value = {password}
                        minLength = "6"
                        maxLength = "20"
                        pattern = "[a-z0-9]{6,20}"
                        required = {true}
                        onChange={handleChange} />
                        {passwordError !== null && <div className = "error-message">
                                {passwordError}
                            </div>}
                        <label htmlFor="password">Password</label>
                    </div>
                    <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="login"
                        style={{ width: '100%' }}>
                        Login
                    </button>
                </form>
            </div>
        </section>
    )
}
