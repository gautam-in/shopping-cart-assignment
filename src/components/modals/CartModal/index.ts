import { IState } from "@typings/state/index";
import { connect } from "react-redux";
import { compose } from "recompose";
import { addToCart, removeItemFromCart } from "../../../actions/index";
import {
  selectCart,
  selectProducts,
  selectTotalCount,
} from "../../../selectors/catalog";
import CartModal from "./Cart";

const mapStateToProps = (state: IState) => ({
  products: selectProducts(state),
  cartDetails: selectCart(state),
  totalItems: selectTotalCount(state),
});

const actions = { addToCart, removeItemFromCart };

export default compose(connect(mapStateToProps, actions))(CartModal);
