import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCartOpen } from '../../../../store/actions';
import withErrorHandler from '../../../ErrorBoundary/withErrorHandler';
import { CartBtn } from './cartButton.styles';

const CartButton = (props) => {
  const cartRef = useRef();
  useEffect(() => {
    const bodyClick = (event) => {
      if (!cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };
    document.body.addEventListener('click', bodyClick, { capture: true });
    return () => {
      document.body.removeEventListener('click', bodyClick, { capture: true });
    };
  }, []);
  const { cartOpen, setCartOpen, cartItems } = props;
  return (
    <CartBtn onClick={() => setCartOpen(!cartOpen)} ref={cartRef}>
      <img src="/static/images/cart.svg" alt="cart item" />
      <span>{cartItems?.length} Items</span>
    </CartBtn>
  );
};
const mapStateToProps = (state) => {
  return {
    cartOpen: state.cart.cartOpen,
    cartItems: state.cart.cartItems?.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCartOpen: bindActionCreators(setCartOpen, dispatch),
  };
};
CartButton.propTypes = {
  cartOpen: PropTypes.bool,
  setCartOpen: PropTypes.func,
  cartItems: PropTypes.array,
};
export default withErrorHandler(
  connect(mapStateToProps, mapDispatchToProps)(CartButton)
);
