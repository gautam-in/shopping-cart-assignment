import React, { useState } from 'react';
import './TextInput.scss'

const TextInput = ({type,label,value,changeHandler,name,error}) => {
  const changeValue=(e)=>{
    changeHandler((prevState)=>({...prevState,[name]:e.target.value}))
  }
  console.log(error);
  return (
    <div className='group'>
         <input 
         type={type}
          value={value}
          onChange={e=>changeValue(e)}
          className= {error? "text-change": "text-input"}
          autoComplete='none'
         
         />     
         <label className={`${
            value?.length ? "shrink" : ""
          } text-input-label`} >{label} </label>
    </div>
  )
}

export default TextInput