import { useDispatch } from 'react-redux';
import { addToShipping, deleteFromShipping } from '../../../store/actions';
import CustomButton from '../Shared/CustomButton';
import {CartItemStyle, ProductDetails, ProductQuantityDetails} from './cartItem.styles';
import PropTypes from 'prop-types';
import withErrorHandler from '../../ErrorBoundary/withErrorHandler';

const CartItem = ({ addedProduct }) => {
  const dispatch = useDispatch();
  return (
    <CartItemStyle key={addedProduct.id}>
      <img src={addedProduct.imageURL} alt={addedProduct.name} />
      <ProductDetails>
        <h4>{addedProduct.name}</h4>
        <ProductQuantityDetails>
          <div>
            <CustomButton
              classes="counter-btn"
              text="-"
              clickHandler={() => dispatch(deleteFromShipping(addedProduct))}
            />
            <span>{addedProduct.quantity}</span>
            <CustomButton
              classes="counter-btn"
              text="+"
              clickHandler={() => dispatch(addToShipping(addedProduct))}
            />
            <span>&times;</span>
            <span>{addedProduct.price}</span>
          </div>
          <p>Rs. {addedProduct.totalPrice}</p>
        </ProductQuantityDetails>
      </ProductDetails>
    </CartItemStyle>
  );
}


CartItem.propTypes = {
  addedProduct: PropTypes.any,
}

export default withErrorHandler(CartItem);
