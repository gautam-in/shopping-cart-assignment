import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../css/Signin.css";
import { useNavigate } from "react-router-dom";
import { getCartItemsCount } from "../utils/cart";
import { ToastContainer, toast } from "react-toastify";

function Signin({ setItemCount }) {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlerSubmit = () => {
    if (!data.email || !data.password) {
      toast("Please fill all the details!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
      return;
    }
    let storageUsers = localStorage.getItem("users");

    if (storageUsers) {
      let parsedStorageUsers = JSON.parse(storageUsers);
      let userData = parsedStorageUsers.find(
        (item) => item.email == data.email
      );
      if (userData) {
        if (userData.password === data.password) {
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/");
          setItemCount(getCartItemsCount());
        } else {
          toast("Incorrect password!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
          });
        }
      } else {
        toast("User does not exist!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
      }
    } else {
      toast("There is no any user in db!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  };

  console.log(data);
  return (
    <div className="signin">
      <div className="signin_left">
        <h2>Login</h2>
        <p>Get access to your Orders,Wishlist and recommendations</p>
      </div>
      <div className="signin_right">
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button className="signin_btn" onClick={handlerSubmit}>
          Login
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signin;
