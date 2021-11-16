import { IoIosAddCircle } from 'react-icons/io';
import { HiMinusCircle } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from '../../styles/CartCard.module.css';
import { addQty, removeQty } from '../../redux/features/cartSlice';

export default function CartCard({
	id,
	name,
	imageURL,
	price,
	qty,
	totalPrice,
}) {
	const dispatch = useDispatch();
	function handleAddToCart() {
		dispatch(addQty(id));
	}

	function handleRemoveCart() {
		dispatch(removeQty(id));
	}
	return (
		<div className={styles.CartCardContainer}>
			<div className={styles.CartProductImage}>
				<Image
					src={imageURL}
					objectFit="contain"
					layout="fill"
					alt="Prodoct Image"
				/>
			</div>
			<div className={styles.CartProductDetails}>
				<div className={styles.CartProductName}>{name}</div>
				<div className={styles.CartQtyAndPrice}>
					<div className={styles.MinusQty}>
						<HiMinusCircle color="red" size="30" onClick={handleRemoveCart} />
					</div>
					<div className={styles.CartProductQty}>{qty}</div>
					<div className={styles.AddQty}>
						<IoIosAddCircle color="green" size="30" onClick={handleAddToCart} />
					</div>
					<div>x</div>
					<div className={styles.ProductPrice}>
						{price}
						&nbsp;₹
					</div>
				</div>
			</div>
			<div className={styles.CartProductTotal}>
				{totalPrice}
				&nbsp;₹
			</div>
		</div>
	);
}
