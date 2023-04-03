import { useLoaderData, useSearchParams } from "react-router-dom";
import { getCategories, getProducts } from "../api";
import { sortAndFilter } from "../helpers";
import "../assets/styles/pages/Products.scss";
import AppDropdown from "../components/AppDropdown";
import CardProducts from "../components/CardProducts";
import ProductsCategorieNav from "../components/ProductsCategorieNav";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, products] = useLoaderData();
  const selectedCategory = searchParams.get("category");

  const handleSelect = ({ id }) => {
    setSearchParams(`category=${id}`);
  };

  const getSelectedText = () => {
    const category = categories.find((u) => u.id === selectedCategory);
    if (category) return category.name;
    return "Please select a category";
  };

  const selectedProducts = () => {
    if (selectedCategory) {
      return products.filter(
        (product) => product.category === selectedCategory
      );
    }

    return products;
  };

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div className="page-products">
      <div className="container">
        <div className="wrapper-categories">
          <div className="wrapper-dropdown">
            <AppDropdown
              selectedText={getSelectedText()}
              handleSelect={handleSelect}
              options={sortAndFilter(categories)}
            />
          </div>

          <div className="wrapper-nav">
            <ProductsCategorieNav
              selectedText={getSelectedText()}
              handleSelect={handleSelect}
              options={sortAndFilter(categories)}
            />
          </div>
        </div>

        <div className="wrapper-products">
          {selectedProducts().map((product) => (
            <CardProducts key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const productsPageLoader = async () => {
  return Promise.all([getCategories(), getProducts()]);
};

export default Products;
