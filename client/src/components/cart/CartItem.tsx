import useAppStore from '../../utils/store/store';
import { Product } from '../../utils/types/product';
import Quantity from './Quantity';

function CartItem({ item }: { item: Product }) {
  const { updateQuantity, removeFromCart } = useAppStore();
  const finalPrice = item.quantity ? item.quantity * item.price : item.price;

  const handleIncrement = () => {
    if (item.quantity && item.stock > item.quantity) {
      updateQuantity(item.id, 'increase');
    }
  };

  const handleDecrement = () => {
    if (item.quantity && item.quantity > 1) {
      updateQuantity(item.id, 'decrease');
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="cart-image">
          <img src={item.imageURL} alt="cart-item" />
        </div>
        <div className="cart-item-content">
          <h2>{item.name}</h2>
          <div className="quantity-container">
            <Quantity
              quantity={item.quantity ?? 0}
              increment={handleIncrement}
              decrement={handleDecrement}
            />
            <div>x Rs. {item.price}</div>
          </div>
        </div>
      </div>
      <div className="cart-item-price">Rs. {finalPrice}</div>
    </div>
  );
}

export default CartItem;
