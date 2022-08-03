import { useState } from "react";

const FormInput = ({label, name, type}:any) =>{
    const [hide, setHide] =useState(false)
    return (
        <div className="form-group mb-1 mt-0" >
            {hide&&<label htmlFor={name} className="form-input-label mt-2">{label}</label>}
            <input type={type} name={name} placeholder={`${!hide?label:''}`} className="form-input my-1" onFocus={()=>{setHide(true)}} onBlur={()=>{setHide(false)} }/>
        </div>
    )
}

export default FormInput;
