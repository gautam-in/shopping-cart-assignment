import React, { useState } from 'react'

const TogglePasswordDisplay = ({setFormaData, id, formData, setError, placeholder}) => {
    const [togglePasswordDisplay, setTogglePasswordDisplay] = useState(false)

    const passwordChangeHandler = (e) => {
      if(id === "confirm-password"){
        setFormaData((prev) => ({...prev, confirmPassword:e.target.value}))
        if(formData.password === e.target.value) {
          setError((prev) => ({...prev, confirmPwd: ""}))
        }
        else {
          setError((prev) => ({...prev, confirmPwd: "passwords don't match"}))
        }
      }
      else {
        setFormaData((prev) => ({...prev, password:e.target.value}))
      }
    }

  return (
    <div className = "relative">
         <input type = {`${togglePasswordDisplay ? "text" : "password"}`} id = {id} className = "login-form-input" onChange = { passwordChangeHandler} placeholder = {placeholder}/>
        { togglePasswordDisplay ? <i className="fa-solid fa-eye show-password" onClick = {() => setTogglePasswordDisplay((prev) => !prev)} title = "hide password"></i> : <i className="fa-solid fa-eye-slash show-password" onClick = {() => setTogglePasswordDisplay((prev) => !prev)} title = "show password"></i>}
    </div>
  )
}

export default TogglePasswordDisplay