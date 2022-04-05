import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from './../../store/cart/cart.actions';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <>
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon />
      </CartIconContainer>
      <ItemCount>{cartCount} item</ItemCount>
    </>
  );
};

export default CartIcon;
