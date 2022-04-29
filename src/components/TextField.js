import React from "react";
import { ErrorMessage,useField } from "formik";
import './TextField.css'


export const TextField=({label,...props})=>{

    const [field, meta]=useField(props);

    return(
        <div className="form-field">
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`${meta.touched && meta.error && 'is-invalid'}` }
                {...field}{...props}

            />
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )

}