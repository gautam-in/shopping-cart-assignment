import { ReactElement } from "react";
import { IState } from "store/interfaces";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import "./cart.scss";
import { CartSelectors } from "./redux/selectors/selectors";
import { CartActions } from "./redux/actions/actions";
import { ProductsList } from "models/products";
import CartModal from "./cartModal";

interface IProps {
  cartItems: ProductsList;
  showCart: boolean;
  toggleModal: Function;
  addToCart: Function;
  decrementProduct: Function;
}

const Index = (props: IProps): ReactElement => {
  const { cartItems, showCart, toggleModal, addToCart, decrementProduct } = props;
  return (
    // <div className="cart">
    <CartModal cartItems={cartItems} showCart={showCart} toggleModal={toggleModal} addToCart={addToCart} decrementProduct={decrementProduct} />
    // </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    cartItems: CartSelectors.selectCartItems(state),
    showCart: CartSelectors.selectShowCart(state),
    loading: CartSelectors.selectLoading(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return { ...bindActionCreators(CartActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
