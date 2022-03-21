import { compose } from "redux";
import { connect } from "react-redux";
import { buyItems } from "../../Redux/CartReducer/cart-action";
import {
  setCategoryId,
  getProducts,
} from "../../Redux/CategoryReducer/cate-action";
import Product from "./product.screen";

const mapStateToProps = (state) => ({
  categoryId: state.cateId.categoryId,
  productList: state.cateId.products,
  filteredList: state.cateId.filteredProducts,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryId: (id) => dispatch(setCategoryId(id)),
  addItemsToCart: (item) => dispatch(buyItems(item)),
  getProductList: () => dispatch(getProducts()),
});

const ProductContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Product
);

export default ProductContainer;
