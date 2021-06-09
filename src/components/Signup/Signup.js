import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import { withRouter } from "react-router-dom"
import "./Signup.scss"
function SignUp(props) {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const [firstName, setfirstname] = useState('')
    const [lastName, setlastname] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const validateData=()=>{
        if (email.length === 0 ||
            password.length === 0 ||
            firstName.length === 0 ||
            lastName.length === 0 ||
            confirmPassword.length === 0) {
            seterror("No Field can be Empty")
            return false

        }
        else if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
            seterror('Please enter valid email address')
            return false

        }
        //else if (password.length < 6 ||!(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/).test(password)) {
        else if (password.length < 6 || !(/^(?=.*\d)(?=.*[a-zA-Z])\S{6,}$/).test(password)) {
            seterror(`Password should have minumum 6 characters and atleast 
            a number and a alphabet and should not have any spaces`)
            return false

        }
        else if (password !== confirmPassword) {
            seterror("Password and confirm password should be same")
            return false

        }
        else {
            seterror("")
            return true

        }
    }
    const loginHandler = (e) => {
        e.preventDefault();
       const isValid=validateData()
       if(isValid)
       props.history.push("/")



    }
    return (
        <div>
            <Navbar />

            <div className="login">
                <div className="login-desc">
                    <div className="signup-name"><header>Signup</header></div>
                    <div ><p>We dont share your personal details with anyone</p></div>
                </div>

                <div>
                    <div className="face">
                        <div className="content">
                            {/* <h2>Sign in</h2> */}
                            <h3 className="error">{error}</h3>
                            <form onSubmit={loginHandler}>
                                <div className="field-wrapper">
                                    <input type="text" name="First Name" placeholder="First Name" value={firstName}
                                        onChange={(e) => setfirstname(e.target.value)} />
                                    <label htmlFor="First Name">First Name</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="text" name="Last Name" placeholder="Last Name" value={lastName}
                                        onChange={(e) => setlastname(e.target.value)} />
                                    <label htmlFor="Last Name">Last Name</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="text" name="Email" placeholder="Email" value={email}
                                        onChange={(e) => setemail(e.target.value)} />
                                    <label htmlFor="Email">Email</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password" placeholder="password"
                                        autocomplete="new-password" value={password}
                                        onChange={(e) => setpassword(e.target.value)} />
                                    <label htmlFor="Password">Password</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password" placeholder="Confirm password"
                                        autocomplete="new-password" value={confirmPassword}
                                        onChange={(e) => setconfirmPassword(e.target.value)} />
                                    <label htmlFor="Confirm password">Confirm password</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="submit" name="Login" value="Signup" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SignUp)