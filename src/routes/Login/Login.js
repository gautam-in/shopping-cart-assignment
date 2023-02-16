import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import { useSelector, useDispatch } from "react-redux";
import { storeLoginData } from "../../redux/userSlice";

function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const windowSize = useSelector((state) => state.user.windowSize);

  return (
    <div className={`${windowSize>400?'flex justify-center':'text-center'} mt-4 bg-white`}>
      <div className="p-4">
        <div className="font-bold text-3xl mb-4">Login</div>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className={`${windowSize>400?'w-1/3':''} pt-4 pl-4 pr-2`}>
        <InputText placeholder={"Email"} value={email} onChange={setEmail} />
        <InputText
          placeholder={"Password"}
          value={password}
          onChange={setPassword}
        />
        <button
          className="px-4 py-2 my-2 text-white bg-primary w-full mb-4"
          onClick={() =>
            dispatch(storeLoginData({ userId: 1, userName: "john", email }))
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
