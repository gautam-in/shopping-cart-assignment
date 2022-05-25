import SideBar from "../component/SideBar";
import "../styles/products-view.scss";
import Products from "../component/Products";

const ProductView = () => {
  return (
    <div className="product-view-card">
      <SideBar />
      <Products />
    </div>
  );
};

export default ProductView;
