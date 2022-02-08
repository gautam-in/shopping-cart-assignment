import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthReq from "../utils/AuthReq";
import "./Login.scss";


const required = value => {
  if (!value) {
    return (
      <div className="" role="alert">
        This field is required!
      </div>
    );
  }
};

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin(e){
    e.preventDefault();

    setLoading(true);
    setMessage("");

    // Form.validateAll();

    if (message.length === 0) {
      AuthReq.login(email, password).then(
        (res) => {
          console.log("Reload shld hppn");
          console.log("res", res);
          history("/");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }

  }
  return (
    <div>
      <div className="login">
        <div className="container">
          <section className="heading">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations.</p>
          </section>
          <section className="details">
            <form 
              onSubmit={handleLogin}
              // ref={c => {
              //   Form = c;
              // }}
            >
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Email' validations={[required]} value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" validations={[required]} value={password} onChange={e => setPassword(e.target.value)}/>
              </div>
              <button type="submit" disabled={loading}>{loading && (
                  <span className=""></span>
                )}Login</button>

              {message && (
                <div role="alert">
                  {message}
                </div>
              )}

              <button
                style={{ display: "none" }}
                // ref={c => {
                //   CheckButton = c;
                // }}
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Login;
