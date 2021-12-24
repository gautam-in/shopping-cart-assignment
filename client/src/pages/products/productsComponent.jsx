import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/organisms/productCard/productCard';
import Sidebar from '../../components/molecules/sidebar/sidebar';
import './product.scss';

function ProductsComponent(props) {
  const { productsData } = props;
  let navigate = useNavigate();

  const handleOnClickNavItems = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="row">
      <h1 className="d-none">Products</h1>
      <div className="sidebar__container col-md-2 mb-3 mb-lg-0 mb-md-0">
        <Sidebar handleOnClickNavItems={handleOnClickNavItems} />
      </div>
      <div className="col-md-10">
        <ProductCard productsData={productsData} />
      </div>
    </div>
  );
}

export default ProductsComponent;
