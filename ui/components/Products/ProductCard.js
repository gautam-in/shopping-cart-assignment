import Image from 'next/image';
import { Button, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/ProductCard.module.css';
import { addToCart } from '../../redux/features/cartSlice';

export default function ProductCard({
	id,
	name,
	imageURL,
	description,
	price,
}) {
	const dispatch = useDispatch();
	const toast = useToast();

	function addToCartHandler() {
		dispatch(
			addToCart({
				id,
				name,
				imageURL,
				description,
				price,
			})
		);
		toast({
			title: 'Product added to cart',
			description: name,
			status: 'success',
			duration: 800,
			isClosable: true,
		});
	}

	return (
		<div className={styles.ProductCardContainer}>
			<div className={styles.ProductName}>
				<p>{name}</p>
			</div>
			<div className={styles.ProductImage}>
				<Image src={imageURL} layout="fill" objectFit="contain" alt={name} />
			</div>
			<div className={styles.ProductDescription}>
				<p>{description}</p>
			</div>
			<div className={styles.ProductPriceAndButton}>
				<Button
					width="100%"
					colorScheme="red"
					bgColor="var(--category-banner-card-button-color)"
					size="sm"
					borderRadius={0}
					_hover={{
						bg: 'var(--white)',
						color: 'var(--primary)',
						boxShadow: 'rgba(0, 0, 0, 0.24) 0 0.5rem 1rem',
					}}
					onClick={addToCartHandler}
					isFullWidth
				>
					Buy now @ Rs. {price}
				</Button>
			</div>
		</div>
	);
}
