import React, { useState } from "react";
import { useHistory } from "react-router";
import useForm from "../../customHooks/useForm";

function Register() {
  const history = useHistory();

  const { inputs, handleChange } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPwBlurred, setConfirmPwBlurred] = useState(false);
  return (
    <div className="flexed">
      <div>
        <span>Register </span>
        <span>We do not share your personal details with anyone.</span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputs.password === inputs.confirmPassword) {
            localStorage.setItem("userLoggedIn", true);
            history.push("/home");
          }
        }}
      >
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={handleChange}
            required
            onBlur={() => {
              setConfirmPwBlurred(true);
            }}
          />
          {confirmPwBlurred && inputs.password !== inputs.confirmPassword && (
            <div>Passwords don't match</div>
          )}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Register;
