import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import { withRouter } from "react-router-dom"
import "./SignIn.scss"
function SignIn(props) {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const loginHandler = (e) => {
        e.preventDefault();
        if (email === 'test' && password === "test") {
            seterror("")
            props.history.push("/")
        }
        else
            seterror('Invalid Credentials')

    }
    return (
        <div>
            <Navbar />

            <div className="login">
                <div className="login-desc">
                    <div className="login-name"><h2>Login</h2></div>
                    <div><p>Get access to your Orders, Wishlists and Recommendations</p></div>
                </div>

                <div>
                    <div className="face">
                        <div className="content">
                            {/* <h2>Sign in</h2> */}
                            <h3 className="error">{error}</h3>
                            <form onSubmit={loginHandler}>
                                <div className="field-wrapper">
                                    <input type="text" name="Email" placeholder="Email" value={email}
                                        onChange={(e) => setemail(e.target.value)} />
                                    <label htmlFor="Email">Email</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password" placeholder="password" autocomplete="new-password" value={password} onChange={(e) => setpassword(e.target.value)} />
                                    <label htmlFor="Password">Password</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="submit" name="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SignIn)