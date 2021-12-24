import React, { useState } from 'react';
import "./SignIn.css"
import {validateForm} from "../validationUtils"
function SignIn(props) {

    const [form, setState] = useState(
        {email:{valid:true,data:""}, password:{valid:true,data:""}}
    )
    const submit = (e)=>{
        e.preventDefault();
        if(validateForm(e,setState))
        {
            fetch("/",{
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin', 
                headers: {
                  'Content-Type': 'application/json'

                },
                body: JSON.stringify({email:form.email.data,password:form.password.data})
              }).then((data)=>
                  data.json()
              );
        }
    }
    return (
        <div className="container">
            <div className="row center">
                <div className="col-5 loginDes">
                    <header>Login</header>
                    <section>Get access to your orders wishlist and recomendation</section>
                </div>
                <div className="col-5 loginform">
                    <form className="loginform" onSubmit={submit}>
                    <input required type="text" name="email"/>
                    <label alt='Email' placeholder='Type your Email'></label>
                    <div style={form.email.valid?{display:"none"}:{display:"block", color:"red", margin:"0% 0% 5% 1%", fontSize:"0.9em"}}>Invalid Email</div>
                    <input required type="password" name="password"/>
                    <label alt='Password' placeholder='Type your password'></label>
                    <div style={form.password.valid?{display:"none"}:{display:"block", color:"red", margin:"1%", fontSize:"0.9em"}}>Invalid Password</div>
                    <button className="explore">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;