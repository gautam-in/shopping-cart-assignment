import React from 'react'
import ButtonComponent from "./UI/ButtonComponent";
const EmptyFooter = () => {
  return (
	<div class='empty__footer'> 
		<ButtonComponent type='button' buttonText={
			<div className="cart__checkout_button">
				<h2>Start Shopping</h2>
			</div>
		} />
	</div>
  )
}

export default EmptyFooter