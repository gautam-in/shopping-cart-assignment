import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { authAction, isUserLoggedInState } from "../../../store/auth-slice";

const Login = () => {
  const [userObj, setUserObj] = useState({ email: "", password: "" });
  const [loginState, setLoginState] = useState(
    useSelector(isUserLoggedInState)
  );
  const dispatcher = useDispatch();

  console.log(" loginState ", loginState);
  const fetcher = (param: any) =>
    fetch(param.url, {
      method: "POST",
      headers: { "Content-Type": "apllication/json" },
      body: JSON.stringify({
        email: param.userObj.email,
        password: param.userObj.password,
      }),
    })
      .then((res) => {
        console.log("res1 ", res);
        return res.json();
      })
      .then((data) => {
        console.log(" data:", data);
        if (data.message) {
          setLoginState(false);
          dispatcher(authAction.setLoginState(false));
        } else if (data.id) {
          dispatcher(authAction.setLoginState(true));
          setLoginState(true);
        }

        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoginState(false);
        dispatcher(authAction.setLoginState(false));
      });

  const loginHandler = (event: any) => {
    event.preventDefault();
    const { email, password } = document.forms[0];
    console.log("loginHandler: ", email.value, password.value);
    if (userObj) {
      const param = { url: `/api/auth/login`, userObj: userObj };
      fetcher(param);
    }
    setUserObj({ email: email.value, password: password.value });
  };
  const router = useRouter();

  if (loginState === true) {
    console.log("loginstate : - ", loginState);
    router.push("/offers");
  } else {
    // router.push("/login");
  }

  return (
    <div className="px-40 py-28 flex flex-wrap justify-center ">
      <form onSubmit={loginHandler}>
        <div className="lg:mr-10 sm:mb-10 truncate ">
          <h1 className="font-bold text-2xl mb-2">Login</h1>
          <p className="text-gray-600 text-sm text-center">
            Get access to your Orders, Wishlists and Reccomendations
          </p>
        </div>
        <div className="">
          <p className="text-green-500">Email</p>
          <input
            type="text"
            name="email"
            className="border-b-2 w-full"
            placeholder="enter email"
          />
          <input
            type="password"
            name="password"
            className="border-b-2 w-full mb-10"
            placeholder="password"
          />

          <input
            className="block bg-red-800 text-white w-full"
            type="submit"
            name="login"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
