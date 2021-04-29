import React, { useState } from "react";
import styles from "./Login.module.scss";
import Input from "@reusableComponents/Input/Input";
import { useStore } from "@src/customHooks/useContext";
import { useHistory } from "react-router-dom";

let initState = {
  Email: "",
  Password: "",
};

const Login: any = () => {
  const [state, dispatch] = useStore();

  const [userInput, setUserInput] = useState<any>(initState);
  const history: any = useHistory();

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setUserInput((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    let arr = JSON.parse(localStorage.getItem("registeredUsers"));

    if (arr) {
      let foundValue: any = arr.find(
        (v: any) =>
          v.Email === userInput.Email && v.Password === userInput.Password
      );

      if (foundValue) {
        let { Email, fname, lname } = foundValue;
        dispatch({
          type: "SET_LOGIN_DETAILS",
          payload: { Email, fname, lname },
        });
        alert("LoggedIn successfully");
        setUserInput(initState);
        history.push("/");
      } else alert("Not a registered user");
    }
  };

  return (
    <div className={`disp-flex ${styles.loginContainer}`}>
      <aside className={`${styles.loginAside}`}>
        <h3>Login</h3>
        <p>Get access to your Orders, Wishlists and Recommendations</p>
      </aside>
      <form onSubmit={handleLogin}>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          name="Email"
          value={userInput.Email}
          required={true}
          autoComplete="off"
          style={{ width: "300px" }}
          onChange={handleInputChange}
        />
        <br />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          name="Password"
          value={userInput.Password}
          required={true}
          autoComplete="off"
          style={{ width: "300px" }}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="submit"
          className={`${styles["btn-style"]}`}
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
