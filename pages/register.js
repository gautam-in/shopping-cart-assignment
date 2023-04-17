import React from 'react'
import CommonHead from '../Components/CommonHead';
import FormHeading from '../CustomComponentsForms/FormHeadingComponent/FormHeading';
import RegisterSignForm from '../CustomComponentsForms/RegisterSignForm/RegisterSignForm';
import { validateRegiterForm } from '../helper';
import styles from "../styles/SignInRegister.module.scss";
export default function Register() {
    const inputLabel = [
        {
          type: "text",
          placeholder: "First Name",
          inputId: "firstName",
        },
        {
          type: "text",
          placeholder: "Last Name",
          inputId: "lastName",
        },
        
        {
          type: "email",
          placeholder: "Email",
          inputId: "email",
        },
        {
          type: "password",
          placeholder: "Password",
          inputId: "password",
        },
        {
          type: "password",
          placeholder: "Confirm Password",
          inputId: "confirmPassword",
        },
      ];
      const initialState={
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }
      return (
        <>
        <CommonHead title={"Sabka Bazzar - Register"} 
            description={"Sabka Bazzar - Register for New User"} 
            keywords={"Sabka Bazzar Registaration,Register for new user sabka bazzar"}
        ></CommonHead>
        <main className={styles["login-container"]}>
          <FormHeading
            className={styles["login-container__article"]}
            title={"SignUp"}
            description={"We do not share your personal details"}
          />
          <RegisterSignForm
            inputLabel={inputLabel}
            button={"SignUp"}
            className={styles["login-container__form"]}
            validateForm={validateRegiterForm}
            initialState={initialState}
          />
        </main>
        </>
      );
}
