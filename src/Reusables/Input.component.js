import React from 'react';
import "../Scss/input.scss";

function Input({id,type,placeholder,text,required,minlength=1}){
    return(
        <div className='input-container'>
            <input className='input'
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            minLength={minlength}/>
            <label className='placeholder' htmlFor={id}>{text}</label>
        </div>
    );
}

export default Input;