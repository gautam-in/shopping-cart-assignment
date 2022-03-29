import "./product.styles.scss";
import allProducts from "../server/products/index.get.json";
import ProductCard from "../component/product-card/product-card.component";

const Products = () => {
  return (
    <div className="product-container">
      {allProducts.map((product) => (
        <ProductCard product={product} key={`key=${product.id}`} />
      ))}
    </div>
  );
};
export default Products;
