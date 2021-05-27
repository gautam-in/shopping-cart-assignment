import React, { useState } from 'react'

export default function Register(props) {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [fnameError, setFnameError] = useState('');
    const [lnameError, setLnameError] = useState('');
    const [password2Error, setPassword2Error] = useState('');


    const handleChange = (e) => {

        if (e.target.name === 'fname') {
            const fname = e.target.value ? e.target.value.toString().trim() : '';
            setFname(fname);
            if (fname === '') {
                setFnameError('First name is required');
            } else {
                setFnameError(null);
            }
        }

        if (e.target.name === 'lname') {
            const lname = e.target.value ? e.target.value.toString().trim() : '';
            setLname(lname);
            if (lname === '') {
                setLnameError('Last name is required');
            } else {
                setLnameError(null);
            }
        }

        if (e.target.name === 'email') {
            const email = e.target.value ? e.target.value.toString().trim() : '';
            setEmail(email);
            const regex = /^[a-z0-9]+@([a-z0-9]{2,10}(\.))*[a-z]{2,10}$/;
            const isValid = regex.test(email);
            if (email === '') {
                setEmailError('Email is required');
            } else if (!isValid) {
                setEmailError('Invalid Email');
            } else {
                setEmailError(null);
            }
        }

        if (e.target.name === 'password') {
            const password = e.target.value ? e.target.value.toString().trim() : '';
            setPassword(password);
            const regex = /^[a-z0-9]{6,20}$/;
            const isValid = regex.test(password);
            if (password === '') {
                setPasswordError('Password is required');
            } else if (!isValid) {
                setPasswordError('Invalid Password');
            } else if (password !== password2) {
                setPasswordError('Both passwords should match');
            } else {
                setPasswordError(null);
                setPassword2Error(null);
            }
        }

        if (e.target.name === 'password2') {
            const password2 = e.target.value ? e.target.value.toString().trim() : '';
            setPassword2(password2);
            const regex = /^[a-z0-9]{6,20}$/;
            const isValid = regex.test(password2);
            if (password2 === '') {
                setPassword2Error('Confirm password is required');
            } else if (!isValid) {
                setPassword2Error('Invalid Password');
            } else if (password !== password2) {
                setPassword2Error('Both passwords should match');
            } else {
                setPassword2Error(null);
                setPasswordError(null);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/');
    }

    return (
        <section className="register-section">
            <div className="register-info">
                <h1>Signup</h1>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div className="register-form">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input
                            id="fname"
                            name="fname"
                            value={fname}
                            type="text"
                            onChange={handleChange}
                            required = {true}
                            className="validate" />
                        {fnameError !== null && <div className="error-message">
                            {fnameError}
                        </div>}
                        <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="input-field">
                        <input
                            id="lname"
                            name="lname"
                            value={lname}
                            type="text"
                            onChange={handleChange}
                            required = {true}
                            className="validate" />
                        {lnameError !== null && <div className="error-message">
                            {lnameError}
                        </div>}
                        <label htmlFor="lname">Last Name</label>
                    </div>
                    <div className="input-field">
                        <input
                            id="email"
                            name="email"
                            value={email}
                            type="text"
                            onChange={handleChange}
                            required = {true}
                            pattern="^[a-z0-9]+@([a-z0-9]{2,10}(\.))*[a-z]{2,10}$"
                            className="validate" />
                        {emailError !== null && <div className="error-message">
                            {emailError}
                        </div>}
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input
                            id="password"
                            name="password"
                            value={password}
                            type="text"
                            onChange={handleChange}
                            required = {true}
                            className="validate" />
                        {passwordError !== null && <div className="error-message">
                            {passwordError}
                        </div>}
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                        <input
                            id="password2"
                            name="password2"
                            value={password2}
                            type="text"
                            onChange={handleChange}
                            required = {true}
                            className="validate" />
                        {password2Error !== null && <div className="error-message">
                            {password2Error}
                        </div>}
                        <label htmlFor="password2">Confirm Password</label>
                    </div>
                    <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                        style={{ width: '100%' }}>
                        Signup
                    </button>
                </form>
            </div>
        </section>
    )
}
