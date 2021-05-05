import React, { useState, useEffect } from 'react'; 
import Input from '../components/input/input'
import { useHistory } from 'react-router-dom';
  
const RegisterForm = () =>
{
    let history = useHistory()
    const [firstname, storeFirstname] = useState("");
    const [lastname, storeLastname] = useState("");
    const [email, storeEmail] = useState("");
    const [password, storePassword] = useState("");
    const [confirmPassword, storeConfirmPassword] = useState("");
    const [error, storeError] = useState("");

    const Emailid = (value) =>
    {
        storeEmail(value);
    }
    const Firstname = (value) =>
    {
        storeFirstname(value);
    }
    const Lastname = (value) =>
    {
        storeLastname(value);
    }
    const Password = (value) =>
    {
        console.log(value)
        storePassword(value);
    }
    const Confirmpassword = (value) =>
    {
        console.log(value)
        storeConfirmPassword(value);
    }
    const register = (event) =>
    {
        event.preventDefault();
        if (password == confirmPassword) {
            history.push('/')
        }
         else {
            storeError("Passwords mismatch");
        }
        
    }
  return (
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-4 mt-5">
                            <h2><strong>Signup</strong></h2>
                            <p>We do not share your personal details with anyone</p>
                        </div>  
                        <div className="col-sm-12 col-md-7 col-lg-4">
                            <form id="registerForm" method="post" onSubmit={register} aria-label="register form">
                            {error != null && <p className="error">{error}</p> }
                                <Input type="text" id="exampleInputfirstname" name="First Name" method={Firstname} pattern="[A-Za-z]{1,}" title="Must Contain only letters"/>
                                <Input type="text" id="exampleInputlastname" name="Last Name" method={Lastname} pattern="[a-z0-9._%+-]{1,}"/>
                                <Input type="email" id="exampleInputEmail1" name="Email" method={Emailid} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Enter a valid email address"/>
                                <Input type="password" id="exampleInputPassword" name="Password" method={Password} pattern="(?=.*\d)(?=.*[a-zA-Z]).{6,}" title="Must contain a number and alphabet, at least 6 or more characters, and cannot have spaces"/>
                                <Input type="password" id="exampleInputPassword1" name="Confirm Password" method={Confirmpassword} />   
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-raised btn-success waves-effect waves-light btnwid">Signup</button>
                                </div>                    
                            </form>
                        </div>  
                    </div>
                </div>
            </section>
  );
}
  
export default RegisterForm;