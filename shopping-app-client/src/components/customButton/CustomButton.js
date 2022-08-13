import React from 'react'
import './customButton.style.css'

const CustomButton = ({children,handleClick}) => {
  return (
    <button className='button-container' onClick={handleClick}>{children}</button>
  )
}

export default CustomButton