import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from '../css/signin.css';

const SignUp = () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [cpass, setCpassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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
            setPasswordError('Please enter a strong password');
            return false;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (validateEmail() && validatePassword()) {
            if (pass === cpass) {
                setPasswordError('');
                history.push('/')
            }
            else {
                setPasswordError('Passwords do not match');
            }
        }
        return

    }

    return (
        <section className={classes['signup-container']}>
            <article className={classes['signup-text']}>
                <h2 style={{ "margin": "0px 1px" }}>Signup</h2>
                <p>We do not share your personal details with anyone.</p>
            </article>
            <form onSubmit={submitHandler} className={classes['signup-form']}>
                <div className="floating-label">
                    <input type="text"
                        className={classes['floating-input']}
                        name="fname"
                        value={fName}
                        required
                        onChange={(e) => { setfName(e.target.value) }} />
                    <label htmlFor="fname">First Name</label>
                </div>
                <br />

                <div className="floating-label">
                    <input type="text"
                        className={classes['floating-input']}
                        name="lname"
                        value={lName}
                        required
                        onChange={(e) => { setlName(e.target.value) }} />
                    <label htmlFor="lname">Last Name</label>
                </div>
                <br />

                <div className="floating-label">
                    <input type="email"
                        className={classes['floating-input']}
                        name="email"
                        value={email}
                        required
                        onChange={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor="email">Email</label>
                    <span className={classes.errorMessage}>{emailError}</span>
                </div>
                <br />

                <div className="floating-label">
                    <input type="password"
                        className={classes['floating-input']}
                        name="pass"
                        value={pass}
                        required
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <label htmlFor="pass">Password</label>
                </div>
                <br />

                <div className="floating-label">
                    <input type="password"
                        className={classes['floating-input']}
                        name="cpass"
                        value={cpass}
                        required
                        onChange={(e) => { setCpassword(e.target.value) }} />
                    <label htmlFor="cpass">Confirm Password</label>
                </div>
                <span className={classes.errorMessage}>{passwordError}</span>
                <br />

                <button type="submit" className={classes.buttons}>Signup</button>

            </form>
        </section>
    );

}

export default SignUp;