import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { cartProductQuantity, removeCartProduct } from '../../../redux/actions';
import { allCartData } from '../../../redux/selector';
import CartHeader from '../../molecules/CartHeader';
import CartBody from '../../molecules/CartBody';
import CartFooter from '../../molecules/CartFooter';
import './CartDrawer.scss';

const CartDrawer = React.memo(({ isOpen, toggleCart }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => allCartData(state));

  const cartQuantity = (status, cartProduct) => {
    const { quantity } = cartProduct;
    const quantityHash = status === 'increment' ? quantity + 1 : quantity - 1;
    if (quantityHash < 1) {
      dispatch(removeCartProduct({ ...cartProduct }));
    } else {
      dispatch(cartProductQuantity({ ...cartProduct, quantity: quantityHash }));
    }
  };

  const totalPrice =
    data &&
    data.reduce((acc, cartProduct) => {
      const { quantity, price } = cartProduct;
      return acc + quantity * price;
    }, 0);

  return (
    <section className={`cart-modal ${isOpen ? 'show-modal' : ''}`}>
      <section className='modal-container'>
        <section className='modal-content'>
          <CartHeader items={data && data.length} toggleCart={toggleCart} />
          <CartBody data={data} cartQuantity={cartQuantity} />
          <CartFooter totalPrice={totalPrice} toggleCart={toggleCart} />
        </section>
      </section>
    </section>
  );
});

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired
};
export default CartDrawer;
