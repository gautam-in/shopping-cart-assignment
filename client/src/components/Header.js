import React,{useState, useContext, useEffect} from 'react'
import '../styles/header.scss'
import Cart from "./Cart";
import CartContext from "../store/cart-context";
import { NavLink, useNavigate } from 'react-router-dom';
const Header = () => {
	const cartContextData = useContext(CartContext);
	const [userIsDesktop, setUserIsDesktop] = useState(true);
	const navigate =useNavigate();
	const {items} = cartContextData;
	const numberOfItems = items.reduce((curNum, item) => {
		return curNum + item.amount;
	}, 0);

	const [buttonHighlighted, setButtonHighlighted] = useState(false);
	
	useEffect(() => {
		if(items.length === 0)return;
		
		setButtonHighlighted(true);
		const timer = setTimeout(() => {
		setButtonHighlighted(false);
		},300);

		return () => {
		clearTimeout(timer);
		};
	}, [items]);

	useEffect(() => {
		window.innerWidth > 960 ? setUserIsDesktop(true) : setUserIsDesktop(false);
	}, [userIsDesktop]);

	const buttonClasses = `cart-img 
		${buttonHighlighted ? 'bump': ""
	}`;
	const [showCart, setShowCart] = useState(false);
	const openCart = () => {
		setShowCart(true);
	  };
  return (
	<nav className='app-header'>
		<div className='logo' onClick={() => navigate('/', { replace: true })}>
			<img src="/static/images/logo_2x.png" alt="logo" />
		</div>
		<div className='nav-links nav_links__two'>
			<NavLink to='/'> <span>Home</span></NavLink>
			<NavLink to='/products/'> <span>Products</span></NavLink>
		</div>
		<div>
			<div className='nav-links'>
				<NavLink to='/login'> <span>Sign In</span></NavLink>
				<NavLink to='/register'> <span>Register</span></NavLink>
			</div>
			<div className={buttonClasses} onClick={userIsDesktop? openCart : () => navigate('/cart', { replace: true })}>
				<div className='img-class'>
					<img src="/static/images/cart.svg" alt="cart icon" />
				</div>
				<span>{`${numberOfItems} items`}</span>
			</div>
			{showCart ? <Cart setShowCart={setShowCart} isDesktop={true}/> : null}
		</div>
	</nav>
  )
}

export default Header