import React, { useState, useEffect } from "react";
import InputText from "../../components/InputText/InputText";
import { useSelector, useDispatch } from "react-redux";
import { storeLoginData } from "../../redux/userSlice";
import { getUserListAPI } from "./api";
import { useNavigate } from "react-router-dom";
import { GlobalReducerInterface, User } from "../../redux/interface";

const Login: React.FC<{}> = ({}) => {
  const [error, setError]: [string, Function] = useState("");
  const dispatch: Function = useDispatch();
  const windowSize: number | null = useSelector(
    (state: GlobalReducerInterface) => state.user.windowSize
  );
  const [userList, setUserList]: [User[], Function] = useState([]);
  const navigate: Function = useNavigate();

  const emailValidation = (emailText: string): boolean => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailText || regex.test(emailText) === false) {
      setError("Please enter a valid email");
      return false;
    }
    return true;
  };
  const passwordValidation = (passwordText: string): boolean => {
    if (!passwordText || passwordText.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };
  const loginHandler = (event: { [key: string]: any }): void => {
    event.preventDefault();
    const { email, password } = event.target;
    if (emailValidation(email.value) && passwordValidation(password.value)) {
      const userObj = userList.find((user) => user.email === email.value);
      if (userObj && Object.keys(userObj)?.length) {
        if (userObj.password === password.value) {
          dispatch(
            storeLoginData({
              userId: userObj.id,
              userName: userObj.name,
              email: userObj.email,
            })
          );
          navigate("/");
        } else {
          setError("Email or password is incorrect!");
        }
      } else {
        setError("User not found!");
      }
      dispatch(
        storeLoginData({ userId: 1, userName: "john", email: email.value })
      );
    }
  };

  const fetchUserList = async () => {
    const userListRes = await getUserListAPI();
    setUserList(userListRes);
  };

  useEffect(() => {
    fetchUserList();
  }, []);
  return (
    <div
      className={`${
        windowSize && windowSize > 500
          ? "flex justify-center gap-20"
          : "text-center"
      } py-8 bg-white`}
    >
      <div>
        <div className="font-bold text-3xl mb-4">Login</div>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className={`${windowSize && windowSize > 400 ? "w-1/3" : ""} `}>
        <form onSubmit={loginHandler}>
          <InputText label={"Email"} name="email" type="email" />
          <InputText label={"Password"} name="password" type="password" />
          <p className="text-red-500 text-center font-12">{error}</p>
          <button
            className="px-4 py-2 my-2 text-white bg-primary w-full mb-4 pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
