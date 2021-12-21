import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/organisms/productCard/productCard";
import Sidebar from "../../components/molecules/sidebar/sidebar";
import "./product.scss";


function ProductsComponent(props) {
  const { productsData } = props;
  let navigate = useNavigate();
 
  const handleOnClickNavItems=(id) => {
    navigate(`/products/${id}`);
  }
  return (
    <div className="row">
      <div className="sidebar__container col-2">
        <Sidebar handleOnClickNavItems={handleOnClickNavItems} />
      </div>
      <div className="col-10">
        <ProductCard productsData={productsData}   />
      </div>
    </div>
  );
}

export default ProductsComponent;
