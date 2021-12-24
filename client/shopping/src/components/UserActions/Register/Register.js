import React , { useState } from 'react';
import {validateForm} from "../validationUtils"
function Register(props) {
    const [form, setState] = useState(
        {
            firstName:{valid:true,data:""},
            lastName:{valid:true,data:""},
            email:{valid:true,data:""}, 
            password:{valid:true,data:""},
            cnfpassword:{valid:true,data:""}
        }
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
                body: JSON.stringify(form)
              }).then((data)=>
                  data.json()
              );
              
        }
    }
    return (
        <div>
            <div className="container">
            <div className="row center" style={{alignItems:"initial"}}>
                <div className="col-5 loginDes" style={{marginTop:"5%"}}>
                    <header>SignUp</header>
                    <section>We dont share your personal details with anyone</section>
                </div>
                <div className="col-5">
                    <form className="loginform" onSubmit={submit}>
                    <input required type="text" name="fname"/>
                    <label alt='First Name' placeholder='Type your First Name'></label>
                    <input required type="text" name="Lname"/>
                    <label alt='Last Name' placeholder='Type your Last Name'></label>
                    <input required type="text" name="email"/>
                    <label alt='Email' placeholder='Type your Email'></label>
                    <div style={form.email.valid?{display:"none"}:{display:"block", color:"red", margin:"0% 0% 5% 1%", fontSize:"0.9em"}}>Invalid Email</div>
                    <input required type="password" name="password"/>
                    <label alt='Password' placeholder='Type your password'></label>
                    <div style={form.password.valid?{display:"none"}:{display:"block", color:"red", margin:"0% 0% 5% 1%", fontSize:"0.9em"}}>Invalid Password</div>
                    <input required type="password" name="cnfpassword"/>
                    <label alt='Confirm Password' placeholder='Confirm your password'></label>
                    <div style={form.cnfpassword.valid?{display:"none"}:{display:"block", color:"red", margin:"1%", fontSize:"0.9em"}}>Passwords do not match</div>
                    <button className="explore login">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Register;