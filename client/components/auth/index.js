import React, { useState, useEffect } from "react";
import LoginView from "./LoginView";
import SignUpView from "./SignUpView";
import style from "./login.module.css";

export default function Login({ signin, register }) {
  console.log(signin, register);
  const [header, setHeader] = useState("");
  const [subheader, setSubHeader] = useState("");
  useEffect(() => {
    if (signin) {
      setHeader("Login");
      setSubHeader("Get access to your Orders,Whishlist and Recommendations");
    }
    if (register) {
      setHeader("SignUp");
      setSubHeader("We do not share your personal details with anyone");
    }
  }, [signin, register]);

  return (
    <>
      <div className={style.container}>
        <div className={style.details}>
          <h1>{header}</h1>
          <p>{subheader}</p>
        </div>
        <div className={style.component}>
          {signin ? <LoginView /> : null}
          {register ? <SignUpView /> : null}
        </div>
      </div>
    </>
  );
}
