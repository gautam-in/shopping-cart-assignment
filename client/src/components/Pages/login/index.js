import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";
import TextFieldComponent from '../../UI/atoms/textField/TextField'
import SubmitButton from '../../UI/atoms/submitButton/submitButton'

function errorMessage(field, error) {
  if (!field && error) return true;
  else return false;
}
function postData(email, password) {
  var axios = require("axios");
  var config = {
    method: "post",
    url: "http://localhost:5000/login",
    headers: {},
  };

  axios(config)
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  function submit(e) {
    if (!email || !password) {
      setError(true);
      return;
    }
    e.preventDefault();
    postData(email, password);
    history.push("home");
  }

  function handler() {
    if (!email || !password) {
      setError(true);
      return;
    }
  }

  return (
    <div className={"loginContainer"}>
      <div>
        <span className="login">Login</span>
        <span className="login2">
          Get access to your Orders,Wishlist and Recommendations
        </span>
      </div>
      <div>
        <form onSubmit={submit} className={"form"} data-test="sign-in">
          <TextFieldComponent 
          setField={setEmail} 
          errorMessage={errorMessage} 
          data={email} 
          error ={error} 
          type= "email" 
          id="standard-basic"
          label="Email"
          data-test="email"
          />
          <TextFieldComponent
          setField={setPassword}
          errorMessage={errorMessage}
          data={password}
          error={error}
          type="password"
          id="standard-basic"
          label="Password"
          data-test="password"
          />
          <SubmitButton handler={handler} text ="Login"/>
        </form>
      </div>
    </div>
  );
}
export default Login;