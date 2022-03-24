import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../Scss/register.scss";
import Input from "../../src/Reusables/Input.component";
import Button from "../../src/Reusables/Button.component";
import { addUser } from "../store/action.js";

function Register(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onCreate = (e) => {
        var regexPassword =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[^-\s](?=.{8,})/;
        var result = regexPassword.test(e.target[3].value);
        e.preventDefault();
        if (e.target[3].value !== e.target[4].value) {
          alert("Password and confirm password input should be same");
        } else if (!result) {
          alert(
            "Password should be 8 letter long with minimum 8 characters, a number and alphabet with no spaces"
          );
        } else {
          const data = {
            firstName: e.target[0].value,
            lastname: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
          };
          console.log(data);
          dispatch(addUser(data));
          navigate("/");
        }
      };
    return(
        <div className="re-container">
            <section className="re-text">
                <div>
                    <h1 style={{fontWeight:"900",fontSize:"1.7rem"}}>Sign Up</h1>
                    <span>We do not share your personal details with anyone</span>
                </div>

            </section>
            <form className="registerBox-input" onSubmit={(e) => onCreate(e)}>
                <Input 
                id="firstname"
                type="text"
                placeholder="First Name"
                text="First Name"
                required={true}/>
                <Input 
                 id="lastname"
                 type="text"
                 placeholder="Last Name"
                 text="Last Name"
                 required={true}/>
                <Input 
                 id="email"
                 type="email"
                 placeholder="Email"
                 text="Email"
                 required={true}/>
                <Input 
                 id="password"
                 type="password"
                 placeholder="Password"
                 text="Password"
                 required={true}/>
                <Input 
                 id="confirmpassword"
                 type="password"
                 placeholder="Confirm Password"
                 text="Confirm Password"
                 required={true}/>
                <Button text="Sign Up" type="submit"  />
            </form>
        </div>
    );
}

export default Register;