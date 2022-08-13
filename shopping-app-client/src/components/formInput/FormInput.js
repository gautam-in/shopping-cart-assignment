import React from 'react'
import './formInput.style.css'
const FormInput = ({label,name, errorMessage , onChange,...otherProps}) => {
  return (
    <div className='group'>
      <input className={`${errorMessage?'form-input-error':'form-input'}`} id={label} 
      
      name={name} onChange={onChange} {...otherProps} />
      <label
        htmlFor={label}
        className={`${
          otherProps.value.length && errorMessage ? 'shrink form-input-error-label' : 
          otherProps.value.length ? 'shrink form-input-label' : errorMessage ?'form-input-error-label':'form-input-label'
        }`}>
          {label}
        </label>
        <p className='error-message'>{errorMessage}</p>
    </div>
    
    )    
}

export default FormInput