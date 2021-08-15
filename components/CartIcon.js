import { HeaderContainer } from './styles/CartStyle';
import { useAppData } from '../lib/store';
import { calculateQuantity } from '../lib/helpers';

export default function CartIcon() {
  const contextData = useAppData();
  const { toggleCart } = contextData;
  const { cart } = contextData?.data;
  const totalCart = calculateQuantity(cart);
  return (
    <HeaderContainer
      tabIndex="0"
      onClick={() => {
        toggleCart();
      }}
      onKeyPress={(e) => (e.code === 'Enter' ? toggleCart() : null)}
    >
      <img src="/static/images/cart.svg" alt="cart-icon" />
      <span>{totalCart} items</span>
    </HeaderContainer>
  );
}
