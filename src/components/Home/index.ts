import { compose } from "recompose";
import { connect } from "react-redux";
import { initCatalog, getCategories } from "../../actions/index";
import {
  selectCatalog,
  isCatalogLoaded,
  selectCategories,
  isCategoriesLoaded,
} from "../../selectors";
import { IState } from "@typings/state/index";
import Home, { Props } from "./Home";

const mapStateToProps = (state: IState) => ({
  catalog: selectCatalog(state),
  categories: selectCategories(state),
  catalogLoaded: isCatalogLoaded(state),
  categoriesLoaded: isCategoriesLoaded(state),
});

const actions = { initCatalog, getCategories };

export default compose<Props, {}>(connect(mapStateToProps, actions))(Home);
