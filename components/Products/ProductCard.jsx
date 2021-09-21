/* eslint-disable max-len */
import Image from 'next/image';
import { Button, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/ProductCard.module.css';
import { addToCart } from '../../redux/features/cartSlice';

export default function ProductCard({
  id, name, imageURL, description, price,
}) {
  const dispatch = useDispatch();
  const toast = useToast();

  function addToCartHandler() {
    // redux state dispatch
    dispatch(addToCart({
      id, name, imageURL, description, price,
    }));

    // Toast
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
      <div className={styles.ProductName}>{name}</div>
      <div className={styles.ProductImage}>
        <Image src={imageURL} layout="fill" objectFit="fill" alt={name} />
      </div>
      <div className={styles.ProductDescription}>
        {description}
      </div>
      <div className={styles.ProductPriceAndButton}>
        <div className={styles.ProductPrice}>

          {price}
          {' '}
          ₹
        </div>
        <div className={styles.ProductButton}>
          <Button colorScheme="telegram" bgColor="var(--product-card-button-color)" width="100%" onClick={addToCartHandler}>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}
