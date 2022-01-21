import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import CategoryDropdown from "../../Components/CategoryDropdown/CategoryDropdown";
import Menubar from "../../Components/Menubar/Menubar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useMediaQuery from "../../util/Customhook/useMediaQuery";
import products from "../../server/products/index.get.json";
import categories from "../../server/categories/index.get.json";
import "./Products.scss";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const match = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const urlParams = useMatch("products/:id");
  const handleClick = (categoryId) => {
    if (categoryId) {
      navigate(`/products/${categoryId}`);
    } else {
      navigate("/products");
    }
  };

  useEffect(() => {
    if (!urlParams) {
      setProductList(products);
    } else {
      setProductList(
        products.filter((product) => product.category === urlParams.params.id)
      );
    }
  }, [urlParams]);
  return (
    <main className="product-container">
      {match ? (
        <Menubar categories={categories} handleClick={handleClick} />
      ) : (
        <CategoryDropdown categories={categories} handleClick={handleClick} />
      )}
      <main className="product-container__card">
        {productList.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageURL}
              name={product.name}
              price={product.price}
              stock={product.stock}
              text={product.description}
            />
          );
        })}
      </main>
    </main>
  );
};

export default Products;
