import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCartOpen } from '../../../../store/actions';
import { CartBtn } from './cartButton.styles';

const CartButton = (props) => {
    const {cartOpen, setCartOpen, cartItems} = props;
  return (
    <CartBtn onClick={() => setCartOpen(!cartOpen)}>
      <img src="/static/images/cart.svg" alt="cart item" />
      <span>{cartItems?.length} Items</span>
    </CartBtn>
  );
};
const mapStateToProps = (state) =>{
    return {
        cartOpen: state.categories.cartOpen,
        cartItems: state.categories.cartItems?.cart
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setCartOpen: bindActionCreators(setCartOpen, dispatch)
    }
}
CartButton.propTypes = {
    cartOpen: PropTypes.bool,
    setCartOpen: PropTypes.func,
    cartItems: PropTypes.array
  }
export default connect(mapStateToProps, mapDispatchToProps)(CartButton)
