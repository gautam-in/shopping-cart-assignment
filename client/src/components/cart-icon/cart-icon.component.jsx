import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from './../../store/cart/cart.actions';

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
  CartActionContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <>
      <CartActionContainer onClick={toggleIsCartOpen}>
        <CartIconContainer>
          <ShoppingIcon />
        </CartIconContainer>
        <ItemCount>{cartCount} item</ItemCount>
      </CartActionContainer>
    </>
  );
};

export default CartIcon;
