import React from 'react'
import ButtonComponent from './UiComponents/ButtonComponent';
const CartCheckoutButton = ({totalAmount}) => {
	
  return (
	<div className="cart__footer">
		<p>Promo code can be applied on payment page</p>
		<div className='cart_button'>
			<ButtonComponent type='button' buttonText={
				<div className="cart__checkout_button">
				<h2>Proceed to Checkout</h2>
				<h2>{`${totalAmount} >`}</h2>
				</div>
			} />
		</div>
	</div>
	
  )
}

export default CartCheckoutButton;