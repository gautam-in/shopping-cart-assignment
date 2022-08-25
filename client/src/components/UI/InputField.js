import React from 'react'

const InputField = React.forwardRef(({type,label,name},ref) => {
	const resetBorders = () => {
		return (
			ref.current.style.border ='none',
			ref.current.style.borderBottom ="1px solid #eaeaea"
		)
	}
  return (
	<div className='form__group'>
		<input type={type} id={name} name={name} ref={ref} onChange={resetBorders}required/>
		<label htmlFor={name}>{label}</label>
	</div>
  )
})

export default InputField