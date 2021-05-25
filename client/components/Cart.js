import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartModal from './CartModal';
import styles from '../styles/nav.module.scss';
import { useState } from 'react';
import { useCart } from '../util/cartState';

const Cart = () => {

  const [show, setShow] = useState(false);
  const { cart, totalCartPrice } = useCart();

  const openModal = (event) => {
    event.stopPropagation();
    setShow(true)

  }

  const closeModal = (event) => {
    event.stopPropagation();
    setShow(false);
  }

  return (
    <div className={styles.cart} onClick={openModal}>
      <ShoppingCartIcon color="error" fontSize="large" />
      <span>{cart.length} Items</span>
      <CartModal show={show} close={closeModal} />
    </div >
  )
}

export default Cart
