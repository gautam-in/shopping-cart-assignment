import React,{useState} from 'react'
import Navbar from "../Navbar/Navbar"
import {withRouter} from "react-router-dom"
import "./Signup.scss"
function SignUp(props) {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const loginHandler=(e)=>{
        e.preventDefault();
        if(email==='test'&&password==="test")
       { 
          seterror("") 
        props.history.push("/")}
        else
        seterror('Invalid Credentials')

    }
    return (
        <div>
            <Navbar />
           
            <div className="login">
                <div className="login-desc">
                    <div><h2>Sigup</h2></div>
                    <div><p>We dont share your personal details with anyone</p></div>
                </div>

                <div>
                    <div className="face">
                        <div className="content">
                            {/* <h2>Sign in</h2> */}
                            <h3 className="error">{error}</h3>
                            <form onSubmit={loginHandler}>
                            <div className="field-wrapper">
                                    <input type="text" name="First Name" placeholder="First Name" value={email}
                                    onChange={(e)=>setemail(e.target.value)}/>
                                    <label>First Name</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="text" name="Last Name" placeholder="Last Name" value={email}
                                    onChange={(e)=>setemail(e.target.value)}/>
                                    <label>Last Name</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="text" name="Email" placeholder="Email" value={email}
                                    onChange={(e)=>setemail(e.target.value)}/>
                                    <label>Email</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password" placeholder="password" autocomplete="new-password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                                    <label>Password</label>
                                </div>
                                <div className="field-wrapper">
                                    <input type="password" name="password" placeholder="Confirm password" autocomplete="new-password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                                    <label>Confirm password</label>
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