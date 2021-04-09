import { useState } from "react";
import {validationErrors} from '../constants/staticData'

export function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
export function validateName(name) {
    const re = /^[A-Za-z]+$/;
    return re.test(name);
  }
export function hasNumber(password) {
    const re = /\d/;
    return re.test(password);
  }
export function hasAlphabet(password) {
    const re = /[a-zA-Z]/g;
    return re.test(password);
  }
  
  

export default function useForm(initial ={}) {
    //create a state object for our inputs
    const [inputs ,setInputs] = useState(initial);
    const [errors ,setErrors] = useState(initial);


    function handleBlur(e) {
        let {value,name,type} = e.target;
        //validting all input types
        if (type == "text" &&(name!=="password" &&name!== "confirm_password")) {
             if (!validateName(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]:validationErrors.name_invalid
                })  
            }
            else if (validateName(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]:''
                })    
            }
        }
        else if (type == "email") {
            if (!value) {
                setErrors({
                    ...errors,
                    [e.target.name]:validationErrors.email_empty
                })
            }
            else if (!validateEmail(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]:validationErrors.email_invalid
                })  
            }
            else if (validateEmail(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]:''
                })    
            }
        }
        else if (name === "password") {
            if (value.length < 6) {
                setErrors({
                    ...errors,
                    [e.target.name]:validationErrors.password_min
                })   
            }
           else if (!hasNumber(value)||!hasAlphabet(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]: validationErrors.password_invalid
                })  
            }
            else if (hasNumber(value)&&hasAlphabet(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]:''
                })    
            }
        }
        //updating the input values
    }
  
    function handleChange(e) {
        let {value,name,type} = e.target;
        if (!e.target.value) {
            setErrors({
                ...errors,
                [e.target.name]:`${e.target.name} cannot be empty`
            })
        }
        if (type == "text" &&(name!=="password" &&name!== "confirm_password")) {
            if (validateName(value)) {
               setErrors({
                   ...errors,
                   [e.target.name]:''
               })    
           }
       }
       else if (validateEmail(value)) {
        setErrors({
            ...errors,
            [e.target.name]:''
        })    
     }
        //updating the input values
        setInputs({
            // copy existing state
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
   
    
    
    function clearForm() {
        const blankState = Object.fromEntries(Object.entries(inputs).map(([key,value])=>[key,""]));
        setInputs(blankState);
     }

return {
    inputs,
    handleChange,
    clearForm,
    errors,
    handleBlur,
    
}
    
}