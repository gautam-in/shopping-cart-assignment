import React, { useState, useEffect } from 'react'; 
import Input from '../components/input/input'
import { useHistory } from 'react-router-dom';
  
const LoginForm = () =>
{
    let history = useHistory()
    const [email, storeEmail] = useState("");
    const [password, storePassword] = useState("");

    const Emailid = (value) =>
    {
        storeEmail(value);
    }
    const Password = (value) =>
    {
        storePassword(value);
    }
    const login = (event) =>
    {
        event.preventDefault();
        history.push('/')
    }
  return (
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-4 mt-5">
                            <h2><strong>Login</strong></h2>
                            <p>Get access to your Orders, Wishlist and Recommendations</p>
                        </div>  
                        <div className="col-sm-12 col-md-7 col-lg-4">
                            <form id="loginForm" method="post" onSubmit={login} aria-label="login form">
                                <Input type="email" id="exampleInputEmail2" name="Email" method={Emailid} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Enter a valid email address"/>
                                <Input type="password" id="exampleInputPassword2" name="Password" method={Password} pattern="(?=.*\d)(?=.*[a-zA-Z]).{6,}" title="Must contain a number and alphabet, at least 6 or more characters, and cannot have spaces"/>
                                <div className="text-center mt-5">
                                    <button type="submit" className="btn btn-raised btn-success waves-effect waves-light btnwid">Login</button>
                                </div>                 
                            </form>
                        </div>  
                    </div>
                </div>
            </section>
  );
}
  
export default LoginForm;