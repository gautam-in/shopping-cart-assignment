import React from 'react'
import ButtonComponent from "./UiComponents/ButtonComponent";
const EmptyFooter = () => {
  return (
	<div className='empty__footer'> 
		<ButtonComponent type='button' buttonText={
			<div className="cart__checkout_button">
				<h2>Start Shopping</h2>
			</div>
		} />
	</div>
  )
}

export default EmptyFooter