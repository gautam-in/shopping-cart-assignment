import React, { lazy, useState } from "react";
import styles from "./Login.module.scss";
import {isValidEmail, isValidPassword} from "../../utils/Utilities";
import { useNavigate } from "react-router-dom";

const Header = lazy(() => import("../../Components/Common/Header/Header"));
const Login = () => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [error,setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(checkValidation()){  
      setError(false);
      localStorage.setItem('isAuthenticated', true);
        setTimeout(() => {
            navigate('/', { replace: true });
          }, 1000);
    }else{
      setError(true);
    }
  }

  const checkValidation = () => {
    if (!isValidEmail(email) || !isValidPassword(password)){
      return false;
    }

    return true;
        
  }

  return (
    <>
      <Header />
      <section className={`${styles.loginSection} pageSection`}>
        <div className={styles.titleBox}>
            <h1>Login</h1>
            <span>Get access to your Orders, Wishlists and Recommendations.</span>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" className={error && !isValidEmail(email) ? styles.error : ""} aria-label="Email" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
            {error && !isValidEmail(email) && <span className={styles.errorMsg}>{"Please Enter a valid Email ID"}</span>}
            <input type="password" placeholder="Password" className={error && !isValidEmail(email) ? styles.error : ""} aria-label="password" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
            {error && !isValidPassword(password) &&  <span className={styles.errorMsg}>{"Password should be a combination of one capital letter, one lower case letter, one number, one special character and atleast 8 characters long"}</span>}
            <button type="submit" className={styles.formCta}>Login</button>
        </form>
      </section>
    </>
  );
};

export default Login;