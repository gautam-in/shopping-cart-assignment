/* eslint-disable no-param-reassign */
import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import styles from '../../styles/PriceSummary.module.css';

export default function PriceSummary() {
  const cartList = useSelector((state) => state.cart.cartList);
  const totalAmount = cartList.reduce((acc, current) => {
    acc += current.qty * current.price;
    return acc;
  }, 0);

  return (
    <div className={styles.PriceSummaryContainerMain}>
      <div className={styles.PriceSummaryHeading}>
        Price Summary
      </div>
      <div className={styles.PricingDetails}>
        <div className={styles.ItemsRow}>
          <div className={styles.ItemsColName}>Items:</div>
          <div className={styles.ItemsPrice}>
            {totalAmount}
                &nbsp;₹
          </div>
        </div>
        <div className={styles.DeliveryRow}>
          <div className={styles.DeliveryColName}>Delivery:</div>
          <div className={styles.DeliveryPrice}>
            {totalAmount > 0 && '40'}
                &nbsp;₹
            {' '}
          </div>
        </div>
        <div className={styles.OrderTotalRow}>
          <div className={styles.OrderTotalColName}>Order Total:</div>
          <div className={styles.OrderTotalPrice}>
            {totalAmount > 0 && (totalAmount + 40)}
            ₹
          </div>
        </div>
      </div>
      <div className={styles.PlaceOrderContainer}>
        <Button colorScheme="blue" width="100%" disabled={totalAmount < 1}>
          <div>Place Order</div>
        </Button>
      </div>
    </div>
  );
}
