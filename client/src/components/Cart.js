import React, { useRef, useContext } from "react";
import ReactDom from "react-dom";
import CartContext from "../store/cart-context";
import CartItems from "./CartItems"
import '../styles/cart.scss'

import CheaperRates from './CheaperRates'
import EmptyCart from "./EmptyCart";
import CartCheckoutButton from "./CartCheckoutButton";
import EmptyFooter from "./EmptyFooter";
const Cart = ({ setShowCart , isDesktop =false}) => {
	// close the modal when clicking outside the modal.
	const cartRef = useRef();
	const cartContext = useContext(CartContext);
	const totalAmount = `Rs.${cartContext.totalAmount.toFixed(2)}`;
	const hasItems = cartContext.items.length > 0;
	
	const closeCart = (e) => {
	if (e.target === cartRef.current) {
		setShowCart(false);
	}
	};
	const cartItemRemoveHandler = (id) => {
		cartContext.removeItem(id);
	};
	const cartAddRemoveHandler = (item) => {
		cartContext.addItems({...item,amount:1});
	};
	
	const cartItems = (
		<ul className="cart-items">
			{cartContext.items.map((item) => (
				<CartItems
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					image={item.image}
					onRemove={cartItemRemoveHandler.bind(null,item.id)}
					onAdd={cartAddRemoveHandler.bind(null,item)}
				/>
			))}
		</ul>
	);
	let content = (<div className="cart__container" ref={cartRef} onClick={closeCart}>
					<div className="cart__modal">
						<div className="cart__head">
							<div>
								<h2>My Cart(<small>1 item</small>)</h2>
							</div>
							<div className="cart__close_button">
								<button onClick={() => setShowCart(false)}>X</button>
							</div>
						</div>
						<div className="cart__body">
							{hasItems && cartItems}
							{hasItems && <CheaperRates />}
							{!hasItems && <EmptyCart />}
						</div>
						{hasItems && <CartCheckoutButton totalAmount={totalAmount}/>}
						{!hasItems && <EmptyFooter />}
						
					</div>
				</div>)
	//render the modal JSX in the portal div.
	return isDesktop? ReactDom.createPortal(content,document.getElementById("portal")) : content;
};

export default Cart;