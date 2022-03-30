import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../UI/ButtonPrimary";
import Input from "../UI/Input";
import classes from "./Register.module.css";

function Register() {
  const history = useHistory();

  const onUserCreate = (e) => {
    var regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[^-\s](?=.{8,})/;
    var result = regexPassword.test(e.target[3].value);
    e.preventDefault();
    if (e.target[3].value !== e.target[4].value) {
      alert("Password and confirm password input should be same");
    } else if (!result) {
      alert(
        "Password should be 8 letter long with minimum 8 characters, a number and alphabet with no spaces"
      );
    } else {
      const data = {
        firstName: e.target[0].value,
        lastname: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value,
      };
      //   props.addUser(data);
      console.log(data);
      history.push("/");
    }
  };

  return (
    <div className={classes["register-container"]}>
      <section className={classes["register-text"]}>
        <div>
          <h1>Sign Up</h1>
          <span>Get access to your Orders, Wishlists and Recommendations</span>
        </div>
      </section>

      <form
        onSubmit={(e) => onUserCreate(e)}
        className={classes["registerBox-input"]}
      >
        <Input
          id="firstname"
          type="text"
          placeholder="First Name"
          text="First Name"
          required={true}
        />
        <Input
          id="lastname"
          type="text"
          placeholder="Last Name"
          text="Last Name"
          required={true}
        />
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
        />
        <Input
          id="confirmpassword"
          type="password"
          placeholder="Confirm Password"
          text="Confirm Password"
          required={true}
        />
        <Button type="submit" className={classes["submit-button"]}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default Register;
