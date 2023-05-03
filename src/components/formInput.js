import React from 'react';
import '../styles/formInput.scss';

const FormInput = ({type, name, id, label, value, changeHandler,error}) => {
   const handleChange = (e) => {
      changeHandler((prevState) => ({...prevState, [name]: e.target.value}))
   } 
   return(
       <div className='group'>
       <input 
         type={type} 
         id={id} 
         name={name} 
         onChange={(e)=>handleChange(e)}
         value={value} 
         // className= {error? "text-change": "text-input"}
         className= "text-input"
          autoComplete='none'/>
       <label className={`${
            value?.length ? "shrink" : ""
          } text-input-label`} >{label} </label>
          
       </div>
    )
}

export default FormInput;