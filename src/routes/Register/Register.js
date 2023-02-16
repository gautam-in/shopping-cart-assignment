import React from "react";
import { useSelector } from "react-redux";

function Register({}) {
  const windowSize = useSelector((state) => state.user.windowSize);
  return (
    <div
      className={`bg-white ${
        windowSize < 400 ? "flex justify-center" : "text-center"
      }`}
    >
      <div className="w-1/3 text-center">
        <header className="text-xl font-bold">Signup</header>
        <p className="font-semibold">
          We do not share your personal details with anyone
        </p>
      </div>
      <div>
        <form></form>
      </div>
    </div>
  );
}

export default Register;
