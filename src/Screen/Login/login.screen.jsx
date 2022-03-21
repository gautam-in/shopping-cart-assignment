import React from "react";
import Button from "../../Component/Button/button.component";
import Input from "../../Component/Input/input.component";
import "./login.styles.scss";

function Login(props) {
  const { checkUser, history } = props;

  const UserloggedIn = (e) => {
    e.preventDefault();
    checkUser(true);
    history.push("/");
  };

  return (
    <div className="login-container">
      <section className="login-text">
        <div>
          <h1>Login</h1>
          <span>Get access to your Orders, Wishlists and Recommendations</span>
        </div>
      </section>
      <form onSubmit={(e) => UserloggedIn(e)} className="input-box">
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
