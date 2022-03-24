import React from "react";
import "../Scss/login.scss";
import Input from "../../src/Reusables/Input.component";
import Button from "../../src/Reusables/Button.component";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state || {});
    const loggedIn = (e) => {
        e.preventDefault();
        
        if(e.target[0].value === user.email && e.target[1].value === user.password){
            alert("Logged In");//If the same user who registered logged In
            
        }
        navigate("/");
      };
  
    return (
        <div className="lo-container" onSubmit={(e) => loggedIn(e)}>
            <section className="lo-text">
                <div>
                    <h1>Login</h1>
                    <span>Get access to your Orders, Wishlists and Recommendations</span>
                </div>
            </section>
            <form className="input-box">
                <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    text="Email"
                    required={true}
                />
                <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    text="Password"
                    required={true}
                    minlength={6}
                />
                <Button text="Login" type="submit" />
            </form>

        </div>
    );
}

export default Login;