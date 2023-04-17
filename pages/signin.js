import React from 'react'
import CommonHead from '../Components/CommonHead';
import FormHeading from '../CustomComponentsForms/FormHeadingComponent/FormHeading';
import RegisterSignForm from '../CustomComponentsForms/RegisterSignForm/RegisterSignForm';
import {  validateSignInForm } from '../helper';
import styles from "../styles/SignInRegister.module.scss";
export default function SignIn() {
    const inputLabel = [
        {
            type: "email",
            placeholder: "Email",
            inputId: "email"
        },
        {
            type: "password",
            placeholder: "Password",
            inputId: "password"
        }
    ];
    const initialState={
        
        email: "",
        password: ""
      }

    return (
        <>
        <CommonHead title={"Sabka Bazzar - Sigin"} 
            description={"Sabka Bazzar - Login"} 
            keywords={"Sabka Bazzar Login"}
        ></CommonHead>
        <main className={styles["login-container"]}>
            <FormHeading className={styles["login-container__article"]} title={"Login"} description={"Get Access to your Orders, Wishlist and Recommendations"} />
            <RegisterSignForm inputLabel={inputLabel} button={"Login"} className={styles["login-container__form"]} validateForm={validateSignInForm} initialState={initialState}/>
        </main>
        </>
    )
}
