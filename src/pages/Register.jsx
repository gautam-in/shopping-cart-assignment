import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import TextField from "../components/TextField";
import * as Yup from "yup";
import bcrypt from "bcryptjs";
import toast from "izitoast";

const RegisterForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, "First name must be 3 characters or more")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Last name must be 3 characters or more")
      .required("Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required")
      .test({
        name: "isPresent",
        message: "User with this email is already in system",
        test: (value) => {
          let users = JSON.parse(localStorage.getItem("users")) || [];
          return users.filter((user) => user.email.toLowerCase() === value)
            .length > 0
            ? false
            : true;
        },
      }),
    password: Yup.string()
      .min(8, "Password must be 8 characters or less")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(value) => {
        let data = value;
        let password = data.password;

        // Creating hashed passwords
        let hashPassword = bcrypt.hashSync(password, 10);
        // updating password & confirmPassword with hash
        data["password"] = hashPassword;
        data["confirmPassword"] = hashPassword;
        // Deleting not required key
        delete data.confirmPassword;
        // Storing user data in local machince
        let users = JSON.parse(localStorage.getItem("users")) || [];
        localStorage.setItem(
          "users",
          JSON.stringify([...users].concat(data), null, 2)
        );
        // Showing Alert that user successfully registered to the app
        toast.success({ message: "Registered successfuly" });
        // Resetting form fields;
        const resetBtn = document.getElementById("resetBtn");
        resetBtn.click();
      }}
    >
      {(_formik) => (
        <>
          <Form role={"form"}>
            <TextField
              name="firstName"
              type="text"
              label={"First Name"}
              id="firstName"
            />
            <TextField
              name="lastName"
              type="text"
              label={"Last Name"}
              id="lastName"
            />
            <TextField name="email" type="email" label="Email" id="email" />
            <TextField
              name="password"
              type="password"
              label="Password"
              id="password"
            />
            <TextField
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              id="confirmPassword"
            />
            <button className="btn" type="submit" role={"button"}>
              Register
            </button>
            <button
              type="reset"
              hidden
              aria-hidden="true"
              role={"button"}
              id="resetBtn"
            >
              Reset
            </button>
          </Form>
          <h5 className="text-center mt-2">
            Already have an account?{" "}
            <Link to="/signin" className="px-2 py-1">
              Login
            </Link>
          </h5>
        </>
      )}
    </Formik>
  );
};

function Register(_props) {
  return (
    <div
      className="py-5 px-md-5 px-3 login- d-flex justify-content-center align-items-center"
      role={"group"}
    >
      <div className="container max-auto">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-3" aria-label="Login">
              Register
            </h1>
            <p aria-label="Login Description">
              We do not share your personal details with anyone
            </p>
          </div>
          <div className="col-md-6 mt-md-0 mt-5 ">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
