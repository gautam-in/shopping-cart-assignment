import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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

    var pressed = (e.getAttribute("aria-pressed") === "true");
    e.setAttribute("aria-pressed", !pressed);

    setLoading(true);
    setMessage("");

    if(pressed){
      if (message.length === 0) {
        AuthReq.login(email, password).then(
          (res) => {
            if (res.status >= 400) {
              setMessage(res.message);
              throw new Error(res.message);
            }
            setMessage("Login Successfully!!");
            history("/");
            window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            setLoading(false);
            setMessage(resMessage);
          }
        )
      } else {
        setLoading(false);
      }
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
              aria-label="Login Form"
              // ref={c => {
              //   Form = c;
              // }}
            >
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Email' validations={[required]} value={email} onChange={e => setEmail(e.target.value)} contenteditable="true"/>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" validations={[required]} value={password} onChange={e => setPassword(e.target.value)
                } contenteditable="true"
                />
              </div>
              <button type="submit" disabled={loading} aria-pressed="false" aria-label="Submit the login form">{loading && (
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
