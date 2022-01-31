import { compose } from "recompose";
import { connect } from "react-redux";
//import { getProducts, getCategories, addToCart } from "../../actions/index";
import { selectTotalCount } from "../../selectors/catalog";
import { IState } from "@typings/state/index";
import Header from "./Header";

const mapStateToProps = (state: IState) => ({
  totalItems: selectTotalCount(state),
});

const actions = {};

export default compose(connect(mapStateToProps, actions))(Header);
