import React from 'react'

const CartItems = (props) => {
	const price = `Rs.${props.price.toFixed(2)}`;
	const totalPrice = `Rs.${props.price.toFixed(2) * props.amount }`;
  return (
	<li>
		<div className='cart__image'>
      		<img src={props.image} alt={props.name} />
        </div>
		<div className='cart__product__details'>
			<div className='cart__product__title'>
				<h2>{props.name}</h2>
			</div>
          	<div className="cart__item">
				<div className='cart__item__sorting'>
					<button onClick={props.onRemove}>−</button>
					<span>{props.amount}</span>
					<button onClick={props.onAdd}>+</button>
					<span >{`x  ${price}`}</span>
				</div>
            	<span>{totalPrice} </span>
		  	</div>
        </div>
    </li>
  )
}

export default CartItems