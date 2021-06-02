import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import { withRouter } from "react-router-dom"
import "./SignIn.scss"
function SignIn(props) {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const validateLogin = () => {
        if (email === 'test@gmail.com' && password === "Test81!") {
            seterror("")
            return true
        }
        else return false
    }
    const loginHandler = (e) => {
        e.preventDefault();

        if (validateLogin()) {
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
                    <div className="login-name"><header>Login</header></div>
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
                                        onChange={(e) => {setemail(e.target.value)
                                            seterror("")
                                        }}
                                        //className={error===""?'':"invalid"} 
                                        />
                                    <label htmlFor="Email">Email</label>
                                   {/* {error.length>0&& <p className="invalid-msg">Email incorrect</p>} */}

                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password" placeholder="password" 
                                     value={password} onChange={(e) => {
                                         seterror("")
                                         setpassword(e.target.value)}} 
                                     //className={error===""?'':"invalid"} 
                                     />
                                    <label htmlFor="Password">Password</label>
                                   {/* {error.length>0&& <p className="invalid-msg">Password incorrect</p>} */}

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