import {
  getBannerOffers,
  getCategories,
  setCategoryId,
} from "../../Redux/CategoryReducer/cate-action";
import { compose } from "redux";
import { connect } from "react-redux";
import Home from "./home.screen";

const mapStateToProps = (state) => ({
  category: state.cateId,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryId: (id) => dispatch(setCategoryId(id)),
  getCategory: () => dispatch(getCategories()),
  getOffers: () => dispatch(getBannerOffers()),
});

const HomeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Home
);

export default HomeContainer;
