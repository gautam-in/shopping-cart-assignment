import React from 'react'
import './customButton.style.css'

const CustomButton = ({children,handleClick , isLargeButton}) => {
  return (
    <button className={`${isLargeButton ? 'button-large':''} button-container`} onClick={handleClick}>{children}</button>
  )
}

export default CustomButton