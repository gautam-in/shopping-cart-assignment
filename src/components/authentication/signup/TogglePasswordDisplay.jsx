import React, { useState } from 'react'

const TogglePasswordDisplay = ({ id, placeholder, name, firstNameHandler, errorMsg}) => {
    const [togglePasswordDisplay, setTogglePasswordDisplay] = useState(false)
    const checkPassword = /^(?!.* )(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  return (
    <div className = "relative">
         <input type = {`${togglePasswordDisplay ? "text" : "password"}`} id = {id} name = {name}className = "login-form-input" onChange = {(e) => firstNameHandler(e, name === "password" ?!checkPassword.test(e.target.value):"", errorMsg)} placeholder = {placeholder}/>
        { togglePasswordDisplay ? <i className="fa-solid fa-eye show-password" onClick = {() => setTogglePasswordDisplay((prev) => !prev)} title = "hide password"></i> : <i className="fa-solid fa-eye-slash show-password" onClick = {() => setTogglePasswordDisplay((prev) => !prev)} title = "show password"></i>}
    </div>
  )
}

export default TogglePasswordDisplay