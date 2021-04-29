import React, { useRef, useState } from "react";
import styles from "./Register.module.scss";
import Input from "@reusableComponents/Input/Input";

let initState = {
  fname: "",
  lname: "",
  Email: "",
  Password: "",
  cpassword: "",
};

const Register: any = () => {
  const [userInput, setUserInput] = useState<any>(initState);

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setUserInput((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let arr = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    arr.push(userInput);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    alert("form submitted successfully");
    setUserInput(initState);
  };
  return (
    <div className={`disp-flex ${styles.registerContainer}`}>
      <aside className={`${styles.registerAside}`}>
        <h3>Signup</h3>
        <p>We do not share your personal details with anyone.</p>
      </aside>
      <form onSubmit={handleSubmit}>
        <Input
          id="fname"
          type="text"
          placeholder="First Name"
          name="fname"
          value={userInput.fname}
          required={true}
          autoComplete="off"
          style={{ width: "300px" }}
          onChange={handleInputChange}
        />
        <br />
        <Input
          id="lname"
          type="text"
          placeholder="Last Name"
          name="lname"
          value={userInput.lname}
          autoComplete="off"
          style={{ width: "300px" }}
          onChange={handleInputChange}
        />
        <br />
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
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          title="Must contain at least one number and one letter, at least 6 or more characters and no whitespaces"
          style={{ width: "300px" }}
          onChange={handleInputChange}
        />
        <br />
        <Input
          id="cpassword"
          type="password"
          placeholder="Confirm Password"
          name="cpassword"
          value={userInput.cpassword}
          required={true}
          autoComplete="off"
          title="Confirm password should be same as password"
          style={{ width: "300px" }}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="submit"
          className={`${styles["btn-style"]}`}
          value="Signup"
        />
      </form>
    </div>
  );
};

export default Register;
