import React, { useState } from 'react';
import '../CSS/SignUp.css';
import { useDispatch } from 'react-redux';
import { signup } from '../actions/userauth.action'
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [emailError, setemailError] = useState("");
    const [pswdError, setpswdError] = useState("");
    const [pswdconfirm, setpswdConfirm] = useState("")
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const userInfoHandler = (event) => {
        debugger;
        const { value, name } = event.target;
        console.log(`${name} : ${value}`)
        setUser({
            ...user,
            [name]: value
        })
        setemailError('');
        setpswdError('');
        setpswdConfirm('');
    }

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!user.email || regex.test(user.email) === false) {
            setemailError("Email is not valid")
            return false;
        }
        return true;
    }

    const passwordValidation = () => {
        const pswdregex = /\s/;

        if (user.password) {
            if (user.password.length < 6) {
                setpswdError('Password length is too short');
                return false;
            } else if (user.password.search(/\d/) == -1) {
                setpswdError('Password must contain atleast one numeric digit');
                return false;
            } else if (user.password.search(/[a-zA-Z]/) == -1) {
                setpswdError('Password must contain atleast one alphabet');
                return false;
            } else if (pswdregex.test(user.password)) {
                setpswdError('Your Password contains white space');
                return false;
            }

            return true
        } else {
            setpswdError('Password field is mandatory');
            return false;
        }

    }

    const confirmPasswordCheck = () => {
        if (user.password === user.confirmPassword) {
            return true;
        }
        setpswdConfirm('Password is not same')
        return false;
    }

    const submitForm = (e) => {
        debugger;
        e.preventDefault();
        if (emailValidation() && passwordValidation() && confirmPasswordCheck()) {
           
            console.log(user)
            dispatch(signup(user));
            history.push('/')

        } else if (user.firstName === '' || user.lastName === '' || user.email === '' || user.password === '' || user.confirmPassword === '') {
            alert('Fields cannot be empty')
        }
        else {
            alert('Cannot submit the form due to invalid email & password')
        }
    }
    return (
        <div className='signUp'>
            <section className='signUpLeftWrapper'>
                <div>
                    <h1>Sign Up</h1>
                    <span>We do not share your personal details with anyone</span>
                </div>
            </section>
            <form className='signupForm'>
                <div className='inputFieldWrapper'>
                    <input type="text" className="inputField" id="firstname" name="firstName" value={user.firstName} onChange={userInfoHandler} placeholder="First Name" required={true} />
                    <label className="inputLabel" htmlFor="firstname">
                        FirstName
                    </label>
                </div>
                <div className='inputFieldWrapper'>
                    <input type="text" className="inputField" id="lastname" name="lastName" value={user.lastName} onChange={userInfoHandler} placeholder="Last Name" required={true} />
                    <label className="inputLabel" htmlFor="lastname">
                        LastName
                    </label>
                </div>
                <div className='inputFieldWrapper'>
                    <input type="email" className="inputField" id="email" name="email" placeholder="Email" onChange={userInfoHandler} value={user.email} required={true} />
                    <label className="inputLabel" htmlFor="email">
                        Email
                    </label>
                    <span>{emailError}</span>
                </div>
                <div className='inputFieldWrapper'>
                    <input type="password" className="inputField" id="password" name="password" value={user.password} onChange={userInfoHandler} placeholder="Password" required={true} />
                    <label className="inputLabel" htmlFor="password">
                        Password
                    </label>
                    <span>{pswdError}</span>
                </div>
                <div className='inputFieldWrapper'>
                    <input type="password" className="inputField" id="confirmpassword" name="confirmPassword" value={user.confirmPassword} onChange={userInfoHandler} placeholder="Confirm Password" required={true} />
                    <label className="inputLabel" htmlFor="confirmpassword">
                        Confirm Password
                    </label>
                    <span>{pswdconfirm}</span>
                </div>
                <button type="submit" onClick={submitForm} className='signupbtn'>Signup</button>
            </form>
        </div>
    )
}

export default SignUp;