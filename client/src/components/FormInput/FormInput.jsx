import React from 'react'

import classes from './FormInput.module.css'

const FormInput = ({handleChange, label, error, ...otherProps}) => {

    return(

        <div className={classes.group}>
            <input className={classes.form__input} onChange={handleChange} {...otherProps} />
            <label className={`${otherProps.value.length > 0 ? classes.shrink: ""} 
            ${classes.form__input__label}`}>{label}</label>
            <p className={classes.error__message}>{error}</p>
        </div>

    )


}

export default FormInput