import React from "react";
import LoginView from "../components/auth/LoginView";
import style from "../styles/login.module.css";
export default function Login(props) {
  return (
    <>
      <div className={style.container}>
        <div className={style.details}>
          <h1>Login</h1>
          <p>Get access to your Orders,Whishlist and Recommendations</p>
        </div>
        <div className={style.component}>
          <LoginView />
        </div>
      </div>
    </>
  );
}
