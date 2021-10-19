import React, { useState } from "react";
// import { makeStyles } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Form from "./styles/FormStyles";
import { getCookie, setCookies } from "cookies-next";
import { useRouter } from "next/router";

const SignUp = ({ handleClose }) => {
  const router = useRouter();
  // create state variables for each input
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(firstName, lastName, email, password);
  //   handleClose();
  // };
  const intialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPwd: "",
  };
  const [userDetails, setUserDetails] = useState(intialState);
  const [validation, setValidation] = useState({
    statusErrorMessage: "",
    statusSuccessMessage: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    const emailReg = /\S+@\S+\.\S+/;
    const pwdReg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (userDetails.firstName && userDetails.email && userDetails.password) {
      if (userDetails.password === userDetails.confirmPwd) {
        if (pwdReg.test(userDetails.password)) {
          if (emailReg.test(userDetails.email)) {
            sessionStorage.setItem(
              "name",
              userDetails.firstName + " " + userDetails.lastName
            );
            setCookies("email", userDetails.email);
            setCookies("password", userDetails.password);
            setCookies("status", "");
            setValidation({
              ...validation,
              statusSuccessMessage: "User registered successfully",
              statusErrorMessage: "",
            });
            setUserDetails(intialState);
            setTimeout(() => router.push("/signin"), 2000);
          } else {
            showError("Invalid email id");
          }
        } else {
          showError(
            "Password must contain minimum eight characters, at least one letter, one number and one special character"
          );
        }
      } else {
        showError("Passwords do not match");
      }
    } else {
      showError("Please provide First name, Email & Password");
    }
  };

  const showError = (msg) => {
    setValidation({
      ...validation,
      statusErrorMessage: msg,
    });
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
      <div
        style={{ gridColumn: "2/3", alignContent: "center", paddingTop: "10%" }}
      >
        <h1>Register </h1>
        <p>Get access to your Order wishlist and Recomendation</p>
      </div>
      <div style={{ gridColumn: "3/4" }}>
        <br />
        <Form onSubmit={onFormSubmit} id="Form">
          <TextField
            label="First Name"
            id="fName"
            variant="filled"
            required
            value={userDetails.firstName}
            onChange={(event) =>
              setUserDetails({ ...userDetails, firstName: event.target.value })
            }
          />
          <TextField
            label="Last Name"
            id="lName"
            variant="filled"
            value={userDetails.lastName}
            onChange={(event) =>
              setUserDetails({ ...userDetails, lastName: event.target.value })
            }
          />
          <TextField
            label="Email"
            variant="filled"
            id="email"
            type="email"
            required
            value={userDetails.email}
            onChange={(event) =>
              setUserDetails({ ...userDetails, email: event.target.value })
            }
          />
          <TextField
            label="Password"
            variant="filled"
            id="pass"
            type="password"
            required
            value={userDetails.password}
            onChange={(event) =>
              setUserDetails({ ...userDetails, password: event.target.value })
            }
          />
          <TextField
            label="Confirm Password"
            variant="filled"
            id="pass"
            type="password"
            required
            value={userDetails.confirmPwd}
            onChange={(event) =>
              setUserDetails({ ...userDetails, confirmPwd: event.target.value })
            }
          />
          <p
            style={{
              color: validation.statusErrorMessage ? "red" : "green",
              textAlign: "center",
            }}
          >
            {validation.statusErrorMessage || validation.statusSuccessMessage}
          </p>
          <br />
          <div>
            <Button
              type="submit"
              id="submit"
              variant="contained"
              color="primary"
            >
              SignUp
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
