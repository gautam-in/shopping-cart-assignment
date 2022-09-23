import { Header, ProductCategories, Products } from "../../container";

import categoriesInfo from "./data.json";
import productList from "./products.json";

import "./productListing.scss";

const ProductListing = () => {
  return (
    <div>
      <Header />
      <div className="product-listing-page">
        <ProductCategories categoriesInfo={categoriesInfo} />
        <Products productList={productList} />
      </div>
    </div>
  );
};

export default ProductListing;
