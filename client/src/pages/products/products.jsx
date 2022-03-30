import ProductList from "../../components/productList/productList";
import Sidebar from "../../components/sidebar/sidebar";
import "./products.scss";

const Products = () => {
  return (
    <div className="prodct-container">
      <Sidebar />
      <ProductList />
    </div>
  );
};

export default Products;
