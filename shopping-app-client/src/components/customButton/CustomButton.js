import React from 'react'
import './customButton.style.css'

const CustomButton = ({children,handleClick , type='button', isLargeButton}) => {
  return (
    <button type={type} className={`${isLargeButton ? 'button-large':''} button-container`} onClick={handleClick}>{children}</button>
  )
}

export default CustomButton