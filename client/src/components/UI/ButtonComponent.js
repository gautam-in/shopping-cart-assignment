import React from 'react'

const ButtonComponent = ({buttonText,value,name,type,clickHandler}) => {
	return (
		<button type={type} name={name} value={value} onClick={clickHandler}>{buttonText}</button>
	)
}

export default ButtonComponent