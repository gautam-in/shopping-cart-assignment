import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../Scss/register.scss";
import Input from "../../src/Reusables/Input.component";
import Button from "../../src/Reusables/Button.component";
import { addUser } from "../store/action.js";

function Register() {
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCreate = (fields) => {
    setMessage("");
    var checkPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var check = checkPassword.test(fields.target[3].value);
    fields.preventDefault();
    if (fields.target[3].value !== fields.target[4].value) {
      setMessage("Password and Confirm Password should be same");
    } else if (!check) {
      setMessage(
        "Password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    } else {
      const userDetails = {
        firstName: fields.target[0].value,
        lastname: fields.target[1].value,
        email: fields.target[2].value,
        password: fields.target[3].value,
      };
      dispatch(addUser(userDetails));
      navigate("/");
    }
  };
  return (
    <div className="re-container">
      <section className="re-text">
        <div>
          <h1 style={{ fontWeight: "900", fontSize: "1.7rem" }}>Sign Up</h1>
          <span>We do not share your personal details with anyone</span>
        </div>

      </section>
      <div className="registerBox-input">
        <form onSubmit={(e) => onCreate(e)}>
          <Input
            id="firstname"
            type="text"
            placeholder="First Name"
            text="First Name"
            required={true} />
          <Input
            id="lastname"
            type="text"
            placeholder="Last Name"
            text="Last Name"
            required={true} />
          <Input
            id="email"
            type="email"
            placeholder="Email"
            text="Email"
            required={true} />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            text="Password"
            required={true} />
          <Input
            id="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            text="Confirm Password"
            required={true} />
          <Button text="Sign Up" type="submit" />

        </form>

        <span className="msg">{message}</span>
      </div>
    </div>
  );
}

export default Register;