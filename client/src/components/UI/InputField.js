import React from 'react'

const InputField = React.forwardRef(({type,label,name},ref) => {
  return (
	<div className='form__group'>
		<input type={type} id={name} name={name} ref={ref} required/>
		<label htmlFor={name}>{label}</label>
	</div>
  )
})

export default InputField