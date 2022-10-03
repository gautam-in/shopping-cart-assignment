import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import Cart from "../cart/Cart";
import CopyRights from "../copyRights/CopyRights";
import styles from "./SignIn.module.scss";
import {useNavigate} from "react-router-dom"
const SignIn = () => {
  const navigate=useNavigate();
    const [stylLabel ,setStylLabel]=useState({
    
       email:null,
        password:null,
      
    });
    const [entries, setEntries]=useState({
 
      email:"",
      password:"",
      
    })
    const {email,password}=entries;
  const onTextFocus = (e) => {
  
    const {name}=e.target
   
    setStylLabel((prev)=>({[name]:"update",}))
    e.target.placeholder = "";
   

  };
  const onTextBlur = (e) => {
    e.target.placeholder = e.target.getAttribute("id");
  };
  const setValue=(e)=>{
    const {name,value}=e.target
    setEntries((prev)=>({...prev,[name]:value}))
      }
      const login=()=>{
    
        if( email==="" && password===""){
          alert("Please fill all details")
        }
        else{
        navigate("/Home")  
        }
      }
  return (
    <div>
      <div className={styles.registerWrapper}>
        <div>
          <h3 className={styles.signupText}>Login</h3>
          <h6 className={styles.signupQuote+" "+styles.signInQuotes}>
            Get access to your Orders. Wishlist and Recommendations
          </h6>
        </div>

        <form>
       
          <label className={stylLabel.email==="update"?styles.fnmLabelVisble:styles.fnmLabel}>Email</label>
          <input
            onBlur={(e) => onTextBlur(e)}
            onFocus={(e) => onTextFocus(e)}
            type="email"
            placeholder="Email"
            htmlFor="email"
            name="email"
            id="Email"
            onChange={(e)=>setValue(e)}
            value={email}
          />
          <label className={stylLabel.password==="update"?styles.fnmLabelVisble:styles.fnmLabel}>Password</label>
          <input
            onBlur={(e) => onTextBlur(e)}
            onFocus={(e) => onTextFocus(e)}
            type="password"
            placeholder="Password"
            htmlFor="password"
            name="password"
            id="Password"
            onChange={(e)=>setValue(e)}
            value={password}
          />
         
          <Button onClick={login} className="custom_bg signupBtn">Login</Button>
        </form>

      </div>
      <CopyRights fixedStyle="fixedStyle"/>
      {/* <Cart/> */}
    </div>
  );
};

export default SignIn;
