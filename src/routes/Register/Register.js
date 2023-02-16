import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputText from "../../components/InputText/InputText";

function Register({}) {
  const windowSize = useSelector((state) => state.user.windowSize);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div
      className={`bg-white p-4 ${
        windowSize > 600 ? "flex justify-center" : "text-center"
      }`}
    >
      <div className={`${windowSize > 600 ? "w-1/3" : ""} text-center mr-4`}>
        <header className="text-xl font-bold my-4">Signup</header>
        <p className="font-semibold">
          We do not share your personal details with anyone
        </p>
      </div>
      <div className={`${windowSize > 600 ? "w-1/3" : " mt-4 text-center"}`}>
        <form>
          <InputText
            label="First Name"
            value={firstName}
            onChange={setFirstName}
          />
          <InputText
            label="Last Name"
            value={lastName}
            onChange={setLastName}
          />
          <InputText label="Email" value={email} onChange={setEmail} />
          <InputText label="Password" value={password} onChange={setPassword} />
          <InputText
            label="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <button className="w-full text-center bg-primary text-white font-semibold p-2">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
