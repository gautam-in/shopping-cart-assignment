import React, { useState } from 'react'

const TogglePasswordDisplay = ({ id, placeholder, name, firstNameHandler, errorMsg}) => {
    const [togglePasswordDisplay, setTogglePasswordDisplay] = useState(false)
    const checkPassword = /^(?!.* )(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  return (
    <div className = "relative">
         <input type = {`${togglePasswordDisplay ? "text" : "password"}`} data-testid = {id} id = {id} name = {name}className = "login-form-input" onChange = {(e) => firstNameHandler(e, name === "password" ?!checkPassword.test(e.target.value):"", errorMsg)} required/>
        { togglePasswordDisplay ?<button onClick = {() => setTogglePasswordDisplay((prev) => !prev)} className = "toggle-display-btn"> <i className="fa-solid fa-eye"  title = "hide password"></i></button> : <button onClick = {() => setTogglePasswordDisplay((prev) => !prev)} className = "toggle-display-btn"><i className="fa-solid fa-eye-slash"  title = "show password"></i></button>}
    </div>
  )
}

export default TogglePasswordDisplay