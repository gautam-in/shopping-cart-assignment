import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../css/Register.css";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlerSubmit = () => {
    if (
      !data.firstname ||
      !data.email ||
      !data.lastname ||
      !data.password ||
      !data.confirmpassword
    ) {
      toast("Fill please all the details to continue", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
      });
      return;
    }
    let storageUsers = localStorage.getItem("users");

    const payload = {
      ...data,
      id: uuidv4(),
    };

    if (storageUsers) {
      let parsedStorageUsers = JSON.parse(storageUsers);
      let alreadyExistUser = parsedStorageUsers.find(
        (item) => item.email == payload.email
      );
      if (alreadyExistUser) {
        toast("Email alrady registered!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
      } else {
        parsedStorageUsers.push(payload);
        localStorage.setItem("users", JSON.stringify(parsedStorageUsers));
        setData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
      }
    } else {
      localStorage.setItem("users", JSON.stringify([payload]));
    }
  };

  return (
    <div className="register">
      <div className="register_left">
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="register_right">
        <TextField
          id="standard-basic"
          label="First Name"
          variant="standard"
          name="firstname"
          value={data.firstname}
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          name="lastname"
          value={data.lastname}
          onChange={handleChange}
        />
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
        <TextField
          id="standard-basic"
          label="Confirm Password"
          type="password"
          variant="standard"
          name="confirmpassword"
          value={data.confirmpassword}
          onChange={handleChange}
        />
        <button className="register_btn" onClick={handlerSubmit}>
          Signup
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Register;
