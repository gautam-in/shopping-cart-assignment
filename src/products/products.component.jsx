import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.styles.scss";
import allProducts from "../server/products/index.get.json";
import ProductCard from "../component/product-card/product-card.component";

const Products = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (params && params.type)
      setProducts(
        allProducts.filter((item) => item.imageURL.includes(params.type))
      );
    else setProducts(allProducts);
  }, [params]);

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard product={product} key={`key=${product.id}`} />
      ))}
    </div>
  );
};
export default Products;
