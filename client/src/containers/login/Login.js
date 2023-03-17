import React, { lazy, useState } from "react";
import styles from "./Login.module.scss";
import {isValidEmail, isValidPassword} from "../../utils/Utilities";
import { useNavigate } from "react-router-dom";

const Header = lazy(() => import("../../components/header/Header"));
const Login = () => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState(''); 
  const [emailError, setEmailError] = useState(null); 
  const [passwordError, setPasswordError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isValidEmail(email) && isValidPassword(password))
    {
        setEmailError(null);
        setPasswordError(null);
        localStorage.setItem('isAuthenticated', true);
        setTimeout(() => {
            navigate('/', { replace: true });
          }, 1000);
    }
    else{
        if (!isValidEmail(email))
        {
            setEmailError('Please Enter a valid Email ID');
        }
        else{
            setEmailError(null);
        }
        if(!isValidPassword(password)) {
            setPasswordError("Password should be a combination of one capital letter, one lower case letter, one number, one special character and atleast 8 characters long");
        }
        else{
            setPasswordError(null);
        }
    }
  }

  return (
    <>
      <Header />
      <section className={`${styles.loginSection} pageSection`}>
        <div className={styles.titleBox}>
            <h1>Login</h1>
            <span>Get access to your Orders, Wishlists and Recommendations</span>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
            {emailError && <span className={styles.errorMsg}>{emailError}</span>}
            <input type="password" placeholder="Password" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
            {passwordError && <span className={styles.errorMsg}>{passwordError}</span>}
            <button type="submit" className={styles.formCta}>Login</button>
        </form>
      </section>
    </>
  );
};

export default Login;