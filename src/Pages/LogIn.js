import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../actions/userauth.action';
import '../CSS/SignUp.css'

const LogIn = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [emailError, setemailError] = useState("");
    const [pswdError, setpswdError] = useState("");
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const inputFieldHandler = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })

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

    const submitFormHandler = (e) => {
        e.preventDefault();
        if (user.email === '' || user.password === '') {
            alert('Input Fields are mandatory')
        }

        if(emailValidation() && passwordValidation()){
            dispatch(login())
        } 
    }
    return (
        <div className='signUp'>
            <section className='signUpLeftWrapper'>
                <div>
                    <h1>Log In</h1>
                    <span>Get access to your Orders, Wishlist and Recommendations</span>
                </div>
            </section>
            <form className='signupForm'>
                <div className='inputFieldWrapper'>
                    <input type="email" className="inputField" id="email" value={user.email} name="email" onChange={inputFieldHandler} placeholder="Email" required={true} />
                    <label className="inputLabel" htmlFor="email">
                        Email
                    </label>
                    <span>{emailError}</span>
                </div>
                <div className='inputFieldWrapper'>
                    <input type="password" className="inputField" id="password" value={user.password} name="password" onChange={inputFieldHandler} placeholder="Password" required={true} />
                    <label className="inputLabel" htmlFor="password">
                        Password
                    </label>
                    <span>{pswdError}</span>
                </div>

                <button type="submit" className='signupbtn' onClick={submitFormHandler}>Signup</button>
            </form>
        </div>
    )
}

export default LogIn;