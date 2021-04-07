import { useState } from "react";

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
function validateName(name) {
    const re = /^[A-Za-z]+$/;
    return re.test(name);
  }
function hasNumber(password) {
    const re = /\d/;
    return re.test(password);
  }
function hasAlphabet(password) {
    const re = /[a-zA-Z]/g;
    return re.test(password);
  }
  
  

export default function useForm(initial ={}) {
    //create a state object for our inputs
    const [inputs ,setInputs] = useState(initial);
    const [errors ,setErrors] = useState(initial);


    function handleChange(e) {
        let {value,name,type} = e.target;
        //validting all input types
        if (type == "text" &&(name!=="password" &&name!== "confirm_password")) {
            if (!value) {
                setErrors({
                    ...errors,
                    [e.target.name]:`${name} cannot be empty`
                })
            }
            else if (!validateName(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]:`${name} invalid`
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
                    [e.target.name]:`${name} cannot be empty`
                })
            }
            else if (!validateEmail(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]:`${name} invalid`
                })  
            }
            else if (validateEmail(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]:''
                })    
            }
        }
        else if (name === 'confirm_password') {
            if (value !== inputs.password ) {
              setErrors({
                    ...errors,
                    [e.target.name]:'password does not match'
                })      
            }
            else{
            setErrors({
                ...errors,
                [e.target.name]:''
            })}
        }
        else if (name === "password") {
            if (value.length < 6) {
                setErrors({
                    ...errors,
                    [e.target.name]:`password should be atleast 6 digits long`
                })   
            }
           else if (!hasNumber(value)||!hasAlphabet(value)) {
                setErrors({
                    ...errors,
                    [e.target.name]:`password should contain a number and alphabet`
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
    errors
}
    
}