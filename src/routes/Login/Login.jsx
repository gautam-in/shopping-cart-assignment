import React, { useState, useEffect } from "react";
import InputText from "../../components/InputText/InputText";
import { useSelector, useDispatch } from "react-redux";
import { storeLoginData } from "../../redux/userSlice";
import { getUserListAPI } from "./api";
import { useNavigate } from "react-router-dom";

function Login({}) {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const windowSize = useSelector((state) => state.user.windowSize);
  const [userList, setUserList]=useState([]);
  const navigate=useNavigate();

  const emailValidation = (emailText) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailText || regex.test(emailText) === false) {
      setError("Please enter a valid email");
      return false;
    }
    return true;
  };
  const passwordValidation = (passwordText) => {
    if (!passwordText || passwordText.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };
  const loginHandler = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    if (emailValidation(email.value) && passwordValidation(password.value)) {
      const userObj=userList.find(user=>user.email===email.value)
      if(Object.keys(userObj).length){
        if(userObj.password===password.value){
          dispatch(storeLoginData({userId:userObj.id, userName:userObj.name, email:userObj.email}));
          navigate('/')
        }else{
          setError("Email or password is incorrect!")
        }
      }else{
        setError("User not found!")
      }
      dispatch(
        storeLoginData({ userId: 1, userName: "john", email: email.value })
      );
    }
  };

  const fetchUserList=async()=>{
    const userListRes=await getUserListAPI();
    setUserList(userListRes);
  }

  useEffect(() => {
    fetchUserList()
  }, []);
  return (
    <div
      className={`${
        windowSize > 400 ? "flex justify-center" : "text-center"
      } mt-4 bg-white`}
    >
      <div className="p-4">
        <div className="font-bold text-3xl mb-4">Login</div>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className={`${windowSize > 400 ? "w-1/3" : ""} pt-4 pl-4 pr-2`}>
        <form onSubmit={loginHandler}>
          <InputText label={"Email"} name="email" type="email" />
          <InputText label={"Password"} name="password" type="password" />
          <p className="text-red-500 text-center font-12">{error}</p>
          <button
            className="px-4 py-2 my-2 text-white bg-primary w-full mb-4"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
