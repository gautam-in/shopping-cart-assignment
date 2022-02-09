import React, { useState } from "react";
function SignIn(){
    const [formData, setFormData] = useState({});
    const [isValid, setIsValid] = useState(true);
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
    function SignInSubmit(e) {
        e.preventDefault();
        if(validateEmail(formData.email) && validatePassword(formData.password)){
            document.getElementById("sign-in-form").submit();
        }else{
            setIsValid(false);
        }
    }
    return(
        <main className="row mt-5 col-12 justify-content-md-center">
            <div className="col-xl-3 col-md-6">
                <h3>Login</h3>
                <p>Get access to your Orders, Whislist and Recommendations</p>
            </div>
            <form id="sign-in-form" className="col-xl-3 col-md-6" action="/" method="POST">
                <input type="text" id="email1" onInput={(e)=>{setFormData({...formData,email:e.target.value})}} />
                <label htmlFor="email1">Email</label>
                <input type="text" id="password1" onInput={(e)=>{setFormData({...formData,password:e.target.value})}}/>
                <label htmlFor="password1">Password</label>
                <button type="submit" className="btn-danger" onClick={(e)=>{SignInSubmit(e)}}>Login</button>
                {!isValid && <span role="alert" className="error-msg">Please enter valid details.</span>}
            </form>
        </main>
    )
}
export default SignIn;