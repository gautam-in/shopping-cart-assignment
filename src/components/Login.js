import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from '../css/signin.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');

    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    let history = useHistory();

    const validateEmail = () => {
        const validEmail =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmail.test(email)) {
            setEmailError('');
            return true;
        }
        else {
            setEmailError('Please enter a valid Email')
            return false;
        }
    }

    const validatePassword = () => {
        const validPass = /^.*(?=.{8,})(?=.*[\d])(?=.*[a-zA-Z])(?=.*^\S)[a-zA-Z0-9\S]*$/gm
        if (validPass.test(pass)) {
            setPasswordError('');
            return true;
        }
        else {
            setPasswordError('Incorrect password');
            return false;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (validateEmail() && validatePassword()) {
            setPasswordError('');
            setEmailError('');
            history.push('/')
        }
    }

    return (
        <section className={classes['signup-container']}>

            <article className={classes['signup-text']}>
                <h2 style={{ "margin": "0px 1px" }}>Login</h2>
                <p>Get acces to your Orders, Wishlist, and Recommendations.</p>
            </article>

            <form onSubmit={submitHandler} className={classes['signup-form']}>

                <div className="floating-label">
                    <input type="email"
                        className={classes['floating-input']}
                        name="email"
                        value={email}
                        required
                        onChange={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor="email">Email</label>
                    <div className={emailError ? classes.errorMessage : classes['errorMessage-null']}>
                        {emailError}
                    </div>
                </div>
                
                <div className="floating-label">
                    <input type="password"
                        className={classes['floating-input']}
                        name="pass"
                        value={pass}
                        required
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <label htmlFor="pass">Password</label>
                    <div className={passwordError ? classes.errorMessage : classes['errorMessage-null']}>
                        {passwordError}
                    </div>
                </div>

                <button type="submit" className={classes.buttons}>Signup</button>

            </form>

        </section>
    );

}

export default Login;