import {
  addCart,
  removeCart,
  showCart,
} from "../../Redux/CartReducer/cart-action";
import { connect } from "react-redux";
import { compose } from "redux";
import Cart from "./cart.screen";

const mapStateToProps = (state) => ({
  cartStatus: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  setCartStatus: (val) => dispatch(showCart(val)),
  addItemsToCart: (items) => dispatch(addCart(items)),
  reduceItemsToCart: (items) => dispatch(removeCart(items)),
});

const CartContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Cart
);

export default CartContainer;
