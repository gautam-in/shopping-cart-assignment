import Image from 'next/image';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { TransitionGroup } from 'react-transition-group';
import styles from '../../styles/CartList.module.css';
import CartCard from './CartCard';

export default function CartList() {
	const cartList = useSelector((state) => state.cart.cartList);
	function populateCart(cart) {
		return (
			// Fade from react reveal
			// appear
			<Fade key={cart.id} collapse appear>
				<CartCard
					key={cart.id}
					id={cart.id}
					name={cart.name}
					imageURL={cart.imageURL}
					price={cart.price}
					qty={cart.qty}
					totalPrice={cart.qty * cart.price}
				/>
			</Fade>
		);
	}

	return (
		<div className={styles.CartListContainer}>
			<TransitionGroup>
				{cartList && cartList.map(populateCart)}
			</TransitionGroup>
			{cartList.length === 0 && 'No items in the cart'}

			<div className={styles.LowpriceBanner}>
				<div className={styles.LowpriceImg}>
					<Image
						src="/static/images/lowest-price.png"
						objectFit="contain"
						layout="fill"
						alt="lowpriceimg"
					/>
				</div>
				<div className={styles.LowpriceText}>
					You won't find cheaper anywhere
				</div>
			</div>
		</div>
	);
}
