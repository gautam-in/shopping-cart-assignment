import { useNavigate } from 'react-router-dom';
import useAppStore from '../../utils/store/store';
import { Product } from '../../utils/types/product';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import Promotion from './Promotion';

function CartModal() {
  const { cart, totalPrice } = useAppStore();
  const navigate = useNavigate();
  return (
    <div className="cart-wrapper">
      <div className="cart-inner">
        <div className="cart-header">
          <div className="cart-title">My Cart</div>
          <button type="button" onClick={() => navigate(-1)}>
            x
          </button>
        </div>
        <div className="cart-body">
          {cart.length !== 0 ? (
            <>
              {cart.map((item: Product) => (
                <CartItem item={item} key={item.id} />
              ))}
              <Promotion />
            </>
          ) : (
            <EmptyCart />
          )}
        </div>
        {cart.length !== 0 ? (
          <div className="cart-footer">
            <div className="cart-footer-title">Promocode can be applied on payment page</div>
            <button type="button" className="button">
              <span>Proceed to Checkout</span>
              <span>Rs.{totalPrice} &gt;</span>
            </button>
          </div>
        ) : (
          <div className="cart-footer">
            <button type="button" className="button centered" onClick={() => navigate('/products')}>
              <span>Start Shopping</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
