import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import CartHeader from '../../molecules/CartHeader/CartHeader';
import CartFooter from '../../molecules/CartFooter/CartFooter';
import CartBody from '../../molecules/CartBody/CartBody';
import EmptyCart from '../../molecules/EmptyCart/EmptyCart';
import './Cart.scss';

const Cart = React.memo(({ showCart, toggleCartModal }) => {
  const location = useLocation();
  const cartData = useSelector((state) => state.cart.cartList);
  const itemCount = useSelector((state) => state.cart.cartItem);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    var total =
      cartData &&
      cartData.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0);
    setTotalPrice(total);
  }, [itemCount]);

  return (
    <section
      className={`cart-container ${showCart || location.pathname == '/cart' ? 'show-modal' : ''}`}
    >
      <section className='cart-drawer-modal' aria-label='cart modal'>
        <CartHeader toggleCartModal={toggleCartModal} cartData={cartData} itemCount={itemCount} />
        {cartData.length < 1 ? (
          <EmptyCart toggleCartModal={toggleCartModal} />
        ) : (
          <>
            <CartBody cartData={cartData} />
            <CartFooter totalPrice={totalPrice} />
          </>
        )}
      </section>
    </section>
  );
});

export default Cart;
