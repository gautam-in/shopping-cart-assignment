import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  CartItemContainer,
  ItemDetails,
  QuantityIcon,
  SingleItemTotal,
} from './cart-item.styles';
import { toast } from 'react-toastify';

const CartItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const addProductHandler = () => {
    addItemToCart(cartItems, cartItem)
      .then((dispatchAction) => {
        dispatch(dispatchAction);
      })
      .catch((error) => {
        toast.error('Failed to add item/increase quantity to your cart.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  return (
    <CartItemContainer>
      <img src={imageURL} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <div>
          <div>
            <QuantityIcon onClick={removeItemHandler}>-</QuantityIcon>
            {quantity}
            <QuantityIcon onClick={addProductHandler}>+</QuantityIcon>
            <span>x</span>

            <span>{price}</span>
          </div>
          <SingleItemTotal>Rs. {quantity * price}</SingleItemTotal>
        </div>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
