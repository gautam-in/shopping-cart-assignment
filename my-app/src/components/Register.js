import React, { useState } from "react";
import "./Register.scss";


function Register() {
    const [formData, setFormData] = useState({});
    const [isValid, setIsValid] = useState(true);
    function validateText(element) {
        if (element === "" || element === undefined) {
            return false;
        }
        return true;
    }
    function validateEmail(element) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (element !== undefined && element.match(pattern)) {
            return true;
        }
        return false;
    }
    function validatePassword(element) {
        if (element.length >= 6 && /[a-zA-Z]/.test(element) && /[0-9]/.test(element) && element.indexOf(' ') < 0) {
            return true;
        }
        return false;
    }
    function validateConfirmPassword(element1,element2){
        if(element1 === element2){
            return true;
        }
        return false;
    }
    function RegSubmit(e) {
        e.preventDefault();
        if(validateText(formData.FirstName) && validateText(formData.LastName) && validateEmail(formData.Email) && validatePassword(formData.Password) && validateConfirmPassword(formData.ConfirmPassword,formData.Password)){
            document.getElementById("register-form").submit();
        }else{
        setIsValid(false);
        }
    }
    return (
        <main className="row mt-5 col-12 justify-content-md-center">
            <div className="col-xl-3 col-md-6">
                <h3>Signup</h3>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <form id="register-form" className="col-xl-3 col-md-6" action="/" method="POST">
                <input type="text" id="firstName" onInput={(e) => { setFormData({ ...formData, FirstName: e.target.value }) }} />
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="lastName" onInput={(e) => { setFormData({ ...formData, LastName: e.target.value }) }} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="email" onInput={(e) => { setFormData({ ...formData, Email: e.target.value }) }} />
                <label htmlFor="email">Email</label>
                <input type="text" id="password" onInput={(e) => { setFormData({ ...formData, Password: e.target.value }) }} />
                <label htmlFor="password">Password</label>
                <input type="text" id="confirmPassword" onInput={(e) => { setFormData({ ...formData, ConfirmPassword: e.target.value }) }} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <button type="submit" className="btn-danger" onClick={(e) => { RegSubmit(e) }}>SignUp</button>
                {!isValid && <span role="alert" className="error-msg">Please enter valid details.</span>}
            </form>
            
        </main>
    )
}
export default Register;