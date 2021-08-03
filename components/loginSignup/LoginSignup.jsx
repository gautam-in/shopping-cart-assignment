import firebaseClient from "../../firebaseClient";
import "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import classes from "./LoginSignup.module.css";

export default function LoginSignup({ text, submit }) {
  firebaseClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkPassword = () => {
    if (password === confirmPassword) return true;
    alert("Please enter Confirn Password same as Password");
  };

  return (
    <div className={classes.container}>
      <span className={classes.description}>
        <p className={classes.bold}>{text}</p>
        {text === "Login" ? (
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        ) : (
          <p>We don not share your personal details with anyone</p>
        )}
      </span>

      <form
        className={classes.form}
        onSubmit={async (e) => {
          e.preventDefault();
          text !== "Login"
            ? checkPassword() && submit(email, password)
            : submit(email, password);
        }}
      >
        {text !== "Login" ? (
          <input
            type="firstName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="First Name"
            required
          ></input>
        ) : (
          ""
        )}

        {text !== "Login" ? (
          <input type="lastName" placeholder="Last Name"></input>
        ) : (
          ""
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          required
        ></input>

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required
        ></input>

        {text !== "Login" ? (
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirm Password"
            required
          ></input>
        ) : (
          ""
        )}
        <button>{text}</button>
      </form>
    </div>
  );
}
