import { useSelector } from 'react-redux';
import styles from '../../styles/OrderSummary.module.css';
import CartList from '../Cart/CartList';

export default function OrderSummary() {
  const cartList = useSelector((state) => state.cart.cartList);
  function addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000).toDateString();
  }

  return (
    <div className={styles.OrderSummaryContainer}>
      <div className={styles.ExpectedDeliveryDateContainer}>
        {cartList?.length > 0 && `Delivery By :${addDays(new Date(), 2)}`}

      </div>
      <div className={styles.OrderSummaryProductList}>
        <CartList />
      </div>
    </div>
  );
}
