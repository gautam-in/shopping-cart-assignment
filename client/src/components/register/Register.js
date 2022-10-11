import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CopyRights from "../copyRights/CopyRights";
import styles from "./Register.module.scss";
import {useNavigate} from "react-router-dom"
const Register = () => {
  const navigate=useNavigate()
    const [stylLabel ,setStylLabel]=useState({
        fname:null,
        lname:null,
       email:null,
        password:null,
        cnfmpassword:null
    });
    const [entries, setEntries]=useState({
      fname:"",
      lname:"",
      email:"",
      password:"",
      cnfmpassword:""
    })
  const onTextFocus = (e) => {
    
    const {name}=e.target
    
    setStylLabel((prev)=>({[name]:"update",}))
    e.target.placeholder = "";
   

  };
  const onTextBlur = (e) => {
    e.target.placeholder = e.target.getAttribute("id");
  };
  const {fname,lname,email,password,cnfmpassword}=entries;

  const setValue=(e)=>{
const {name,value}=e.target
setEntries((prev)=>({...prev,[name]:value}))
  }
  const signUP=()=>{
    if(fname==="" &&lname==="" && email==="" && password==="" && cnfmpassword===""){
      alert("Please fill all details")
    }
    else{
    navigate("/SignIn")  
    }
  }
  return (
    <div>
      <div className={styles.registerWrapper}>
        <div>
          <h3 className={styles.signupText}>Signup</h3>
          <h6 className={styles.signupQuote}>
            We do not share your personal details with any one
          </h6>
        </div>

        <form>
          <label className={stylLabel.fname==="update"?styles.fnmLabelVisble:styles.fnmLabel}>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            onBlur={(e) => onTextBlur(e)}
            onFocus={(e) => onTextFocus(e)}
            htmlFor="First Name"
            name="fname"
            id="First Name"
            value={fname}
            onChange={(e)=>setValue(e)}
          />

          <label className={stylLabel.lname==="update"?styles.fnmLabelVisble:styles.fnmLabel}>Last Name</label>
          <input
            onBlur={(e) => onTextBlur(e)}
            onFocus={(e) => onTextFocus(e)}
            type="text"
            placeholder="Last Name"
            htmlFor="lastname"
            name="lname"
            id="Last Name"
            value={lname}
  onChange={(e)=>setValue(e)}
          />
          <label className={stylLabel.email==="update"?styles.fnmLabelVisble:styles.fnmLabel}>Email</label>
          <input
            onBlur={(e) => onTextBlur(e)}
            onFocus={(e) => onTextFocus(e)}
            type="email"
            placeholder="Email"
            htmlFor="email"
            name="email"
            id="Email"
            value={email}
            onChange={(e)=>setValue(e)}
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
            value={password}
            onChange={(e)=>setValue(e)}
          />
          <label className={stylLabel.cnfmpassword==="update"?styles.fnmLabelVisble:styles.fnmLabel}>Confirm Password</label>
          <input
            onBlur={(e) => onTextBlur(e)}
            onFocus={(e) => onTextFocus(e)}
            type="password"
            placeholder="Confirm Password"
            htmlFor="confirmpassword"
            name="cnfmpassword"
            id="Confirm Password"
            value={cnfmpassword}
            onChange={(e)=>setValue(e)}
          />
          <Button onClick={signUP} className="custom_bg signupBtn">Signup</Button>
        </form>

      </div>
      <CopyRights fixedStyle="fixedStyle"/>
      {/* <Cart/> */}
    </div>
  );
};

export default Register;
