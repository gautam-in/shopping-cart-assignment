import React from 'react';
import "../Scss/input.scss";

function Input({id,type,placeholder,text,required,minlength=1}){
    return(
        <div className='form-group'>
            <input className='form-control '
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