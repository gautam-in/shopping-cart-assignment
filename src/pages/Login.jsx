import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import toast from "izitoast";
import TextField from "../components/TextField";
import * as Yup from "yup";

toast.settings({
  position: "bottomCenter",
  timeout: "2000",
});

const LoginForm = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or less")
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(value) => {
        let data = value;
        const resetButton = document.getElementById("resetButton");
        // Authenticated Data
        function _authenticate() {
          // checking weather email is present in the system
          let email = data["email"];
          let password = data["password"];
          let users = JSON.parse(localStorage.getItem("users"));
          let isFound =
            users.filter(
              (user) => user["email"].toLowerCase() === email.toLowerCase()
            ).length > 0
              ? true
              : false;
          let foundData =
            isFound &&
            users.filter(
              (user) => user["email"].toLowerCase() === email.toLowerCase()
            )[0];

          if (isFound) {
            let isPassowrdTrue = bcrypt.compareSync(
              password,
              foundData["password"]
            );

            if (isPassowrdTrue) {
              toast.success({ message: "Logged In Successfully" });
            } else {
              toast.error({ message: "Incorrect password" });
            }
          } else {
            toast.error({ message: "User not found!" });
          }
        }
        _authenticate();
        resetButton.click();
      }}
    >
      {(_formik) => (
        <>
          <Form role={"form"}>
            <TextField name="email" type="email" label="Email" id="email" />
            <TextField
              name="password"
              type="password"
              label="Password"
              id="password"
            />
            <button className="btn" type="submit" role={"button"}>
              Login
            </button>
            <button type="reset" id="resetButton" hidden={true}>
              Reset
            </button>
          </Form>
          <h5 className="text-center mt-2">
            Don't have an account?{" "}
            <Link className="px-2 py-1" to="/register">
              Register
            </Link>
          </h5>
        </>
      )}
    </Formik>
  );
};

function Login(_props) {
  return (
    <div
      className="py-5 px-md-5 px-3 login-wrapper d-flex justify-content-center align-items-center"
      role={"group"}
    >
      <div className="container max-auto">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-3" aria-label="Login">
              Login
            </h1>
            <p aria-label="Login Description">
              Get access to your Orders, Wishlist, and Recommendations
            </p>
          </div>
          <div className="col-md-6 mt-md-0 mt-5 ">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
