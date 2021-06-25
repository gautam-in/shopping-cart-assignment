import { useRouter } from "next/router";
import { useEffect } from "react";
import ProductTile from "./ProductTile";
import { fetchProducts } from "../actions";
import { connect } from "react-redux";

function Products({ products, fetchProducts }) {
  const { query } = useRouter();
  const category = query.category;
  useEffect(() => {
    (async () => {
      await fetchProducts(category);
    })();
  }, [category]);

  const renderProducts = (products) => {
    if (products)
      return products.map((product) => {
        return <ProductTile key={product.id} product={product} />;
      });
  };

  return <>{renderProducts(products)}</>;
}
const mapStateToProps = (state) => {
  return {
    products: state.categories.products,
    categories: state.categories.categories,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Products);
