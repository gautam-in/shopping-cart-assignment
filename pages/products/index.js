import { useRouter } from "next/router";
import { connect } from "react-redux";
import {
  fetchProducts,
  fetchCategories,
} from "../../actions";
import Products from "../../components/Products";
import { useEffect } from "react";
import SideNav from "../../components/SideNav";
import ProductsContainerStyles from "../../components/styles/ProductsContainerStyles";
import MobileCategoryNav from "../../components/MobileCategoryNav";

function CategoryPage(props) {
  const { query } = useRouter();
  const category = query.category;
  const {
    products,
    fetchProducts,
    categories,
    fetchCategories,
  } = props;
  useEffect(() => {
    (async () => {
      await fetchCategories();
      await fetchProducts(category);
    })();
  }, [category]);

  return (
    <div>
      <SideNav categories={categories} />
      <MobileCategoryNav />
      <ProductsContainerStyles>
      <Products products={products} />
      </ProductsContainerStyles>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.categories.products,
    categories: state.categories.categories,
  };
};
export default connect(mapStateToProps, {
  fetchProducts,
  fetchCategories,
  })(CategoryPage);
