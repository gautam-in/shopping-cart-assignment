import React from "react";
import SignUpView from "../components/auth/SignUpView";
import style from "../styles/login.module.css";
export default function Login(props) {
  return (
    <>
      <div className={style.container}>
        <div className={style.details}>
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone</p>
        </div>
        <div className={style.component}>
          <SignUpView />
        </div>
      </div>
    </>
  );
}
