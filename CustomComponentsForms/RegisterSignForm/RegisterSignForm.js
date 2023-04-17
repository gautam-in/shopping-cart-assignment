import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Inputbox from "../Inputbox/Inputbox";
import styles from "./RegisterSignForm.module.scss";


export default function RegisterSignForm({ className = "", inputLabel, button,validateForm,initialState }) {
  const [values, setValues] = useState(
    initialState
  );
  const router=useRouter();
  const [errors, setErrors] = useState({});
  const [submitClicked,setsubmitClicked]=useState(false);
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
    setErrors({});
    setsubmitClicked(true)
  
    
   
  };
  
  useEffect(()=>{
    if(submitClicked){
      let errObj={}
     errObj=validateForm(values);
    if(Object.keys(errObj).length === 0){
      router.push("/");
    }else{
      setErrors(errObj);
    }
  setsubmitClicked(false)  
  }
    
  },[submitClicked])
  return (
    <form
      className={`${className} ${styles["form"]}`}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {inputLabel.map((input) => (
        <Inputbox
          key={input.inputId}
          input={input}
          handleChange={handleChange}
          values={values[input.inputId]}
          errors={errors[input.inputId]}
        />
      ))}
      <button className={`${styles["form__login-button"]} button-wrapper`}>{button}</button>
    </form>
  );
}
